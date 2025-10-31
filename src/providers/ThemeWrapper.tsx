import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  localStorageColorSchemeManager,
  useMantineColorScheme,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { DatesProvider } from "@mantine/dates";
import { NavigationProgress } from "@mantine/nprogress";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import "dayjs/locale/it";
import "dayjs/locale/en";
import "dayjs/locale/fr";
import "dayjs/locale/es";
import { BrowserRouter } from "react-router-dom";
import App from "@/App";

const colorSchemeManager = localStorageColorSchemeManager({
  key: "mantine-color-scheme",
});

// 👇 Questo componente è dentro il provider, quindi può usare useMantineColorScheme
function InnerWrapper() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const { i18n } = useTranslation();

  const mantineLocaleMap: Record<string, string> = {
    it: "it",
    en: "en",
    fr: "fr",
    es: "es",
  };

  const locale = mantineLocaleMap[i18n.language] || "en";
  dayjs.locale(locale);

  return (
    <DatesProvider settings={{ locale, firstDayOfWeek: 1 }}>
      <NavigationProgress />
      <BrowserRouter>
        <App onToggleTheme={() => setColorScheme(colorScheme === "dark" ? "light" : "dark")} />
      </BrowserRouter>
    </DatesProvider>
  );
}

export default function ThemeWrapper() {
  return (
    <MantineProvider
      colorSchemeManager={colorSchemeManager}
      defaultColorScheme="auto"
      theme={{
        fontFamily: "Inter, sans-serif",
        defaultRadius: "md",
        primaryColor: "blue",
      }}
    >
      <ColorSchemeScript />
      <Notifications position="top-right" />
      <ModalsProvider>
        <InnerWrapper />
      </ModalsProvider>
    </MantineProvider>
  );
}
