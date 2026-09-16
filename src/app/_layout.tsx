import { ThemeProvider, useTheme } from "@/theme/ThemeProvider";
import "../global.css";

import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { queryClient } from "@/shared/api/queryClient";

import { QueryClientProvider } from "@tanstack/react-query";

SplashScreen.preventAutoHideAsync();

function RootLayoutContent() {
  const theme = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="auto" />
      <SafeAreaView
        style={{ flex: 1, backgroundColor: theme.color.background }}
        edges={["top"]}
      >
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)/home" />
        </Stack>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <RootLayoutContent />
    </ThemeProvider>
  );
}
