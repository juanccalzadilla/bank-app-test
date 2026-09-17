# Kutxabank App — Technical Test

Lista de transacciones bancarias en React Native + Expo.

## Requisitos

- Node 18+
- Expo Go en el dispositivo, o simulador iOS/Android

## Versiones principales

| Paquete | Versión |
|---------|---------|
| React Native | 0.86.3 |
| React | 19.2.3 |
| Expo | 57.0.22 |
| Expo Router | 57.0.21 |
| TypeScript | 6.0.3 |
| React Query | 5.102.8 |
| Zod | 4.6.5 |
| FlashList | 2.0.2 |
| Reanimated | 4.5.1 |

## Arrancar

```bash
npm install
npx expo start --ios  # o android
```

Storybook:

```bash
npm run storybook:ios    # o :android
```

Tests:

```bash
npm test
```

---

## Estructura

```
src/
  features/
    transactions/   # API, componentes, queries, tipos — todo junto
  shared/
    components/     # AppText, AppButton, AppSkeleton…
    helpers/        # formateo de fechas y moneda
    api/            # queryClient
  theme/            # tokens.json → ThemeProvider → useTheme()
  app/              # rutas (expo-router)
```

Organización por feature, no por tipo de archivo. Si hay un cambio en transacciones, todo lo relevante está en el mismo sitio. Añadir un módulo nuevo es una carpeta en `features/` sin tocar nada existente.

---

## Stack y decisiones

| Qué | Elegido | Por qué |
|-----|---------|---------|
| Design system | Custom + `tokens.json` | El contrato era el JSON — los tokens pasan por `ThemeProvider` y `useTheme()` devuelve el tema tipado. Sin valores hardcodeados. |
| Validación | Zod | TypeScript solo valida en compilación. Zod valida en runtime, convierte tipos (`z.coerce.date()`) y deriva los tipos con `z.infer` — una sola fuente de verdad. |
| Mock de API | JSON estático | La firma de `transactionsApi` es idéntica a la que usaría con `fetch()` real. Cambiar de mock a producción es una línea. |
| Cache | React Query | `staleTime: 5min` + `refetchOnWindowFocus: false`. En mobile el usuario cambia de app constantemente — el pull-to-refresh le da el control. |
| Paginación | Cursor-based | Con offset/page, inserciones concurrentes generan duplicados o items perdidos. El cursor apunta a una posición estable. |
| Lista | FlashList | FlatList tiene blank flashing en listas largas. FlashList recicla las vistas más agresivamente. |
| Carga | Skeleton | Muestra la estructura antes de que lleguen los datos — menos layout shift que un spinner. |
| Imágenes | expo-image | Cachea en disco (SDWebImage / Glide). El `Image` nativo recarga de red cada vez que el logo vuelve al viewport. |
| Storybook | On-device | Los componentes RN solo existen en el runtime nativo. Storybook web renderizaría en DOM — un componente diferente al de producción. |

---

## Componente y estados

`TransactionItem` cubre todos los estados del enunciado:

- **Inbound / Outbound** — icono y color diferente según el tipo
- **Completed / Pending** — mostrado en el label de estado
- **Flagged** — punto de color para llamar la atención
- **Label largo** — `numberOfLines={1}` con truncado
- **Sin imagen** — el icono de dirección hace de fallback
- **Skeleton** — animación con Reanimated mientras cargan los datos

Todos los estados están documentados en Storybook.

---

## Tests

```bash
npm test
npm run test:watch
npm test -- --coverage
```

| Qué | Por qué |
|-----|---------|
| Schema (Zod) | Valida el contrato — campos requeridos, tipos incorrectos, mapping de campos |
| Helpers de dominio | `isInbound`, `statusFormatter`… lógica que puede romperse silenciosamente |
| Helpers de presentación | Formateo de moneda y fechas con `Intl` |

