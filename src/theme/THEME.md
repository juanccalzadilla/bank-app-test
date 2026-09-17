# Theme

El proyecto utiliza un sistema de **design tokens** centralizado definido en `tokens.json`.

La estructura está inspirada en Material 3 y utiliza nombres semánticos para evitar que los componentes dependan directamente de valores como colores, tamaños o radios.

## Colores

Los colores están separados en temas `light` y `dark`.

Los nombres siguen una semántica:

* `primary`: color principal de la aplicación.
* `onPrimary`: contenido que aparece sobre `primary`.
* `background`: fondo general de la pantalla.
* `onBackground`: contenido sobre `background`.
* `surface`: superficies como cards o paneles.
* `onSurface`: contenido sobre `surface`.
* `surfaceContainer*`: diferentes niveles de superficie para crear jerarquía visual.
* `outline` / `outlineVariant`: bordes y separadores.
* `error`, `success` y `warning`: estados semánticos de la aplicación.

Por ejemplo, una `Card` puede utilizar `surface` como fondo y `onSurface` para su contenido, independientemente de si el tema activo es claro u oscuro.

## Spacing

Se utiliza una escala de espaciado común:

```text
xs → 4
sm → 8
md → 16
lg → 24
xl → 32
xxl → 48
```

Los componentes utilizan estos valores en lugar de definir espacios arbitrarios.

## Radius

Los radios también están centralizados:

```text
sm   → 4
md   → 8
lg   → 16
full → 999
```

## Typography

La tipografía se define mediante estilos semánticos:

```text
heading
subheading
body
caption
```

Cada estilo contiene `fontSize`, `lineHeight` y `fontWeight`.

## Componentes

Los componentes reutilizables consumen estos tokens y pueden definir sus propios estilos a partir de ellos.

Por ejemplo:

```text
AppCard
├── background → surface
├── text → onSurface
├── border → outlineVariant
├── radius → lg
└── padding → md
```

De esta forma, los componentes no dependen de valores concretos y el sistema puede adaptarse fácilmente a nuevos temas o cambios de diseño.
