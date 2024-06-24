import type { Preview } from "@storybook/react";

import { initialize, mswLoader } from "msw-storybook-addon";

import React, { useEffect, useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import * as i18n from "../app/i18n/i18n";

import { theme } from "../app/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 100,
    },
  },
});

i18next
  .use(LanguageDetector) // Setup a client-side language detector
  .use(initReactI18next) // Tell i18next to use the react-i18next plugin
  .init({
    ...i18n, // spread the configuration
  });

initialize({
  serviceWorker: {
    url: "/client_marriator_front/mockServiceWorker.js",
  },
  onUnhandledRequest: "bypass",
  findWorker(scriptUrl, mockServiceWorkerUrl) {
    return scriptUrl.includes("mockServiceWorker");
  },
});

const preview: Preview = {
  globalTypes: {
    locale: {
      name: "Locale",
      description: "Internationalization locale",
      toolbar: {
        icon: "globe",
        items: [
          { value: "ru", title: "Русский" },
          { value: "en", title: "English" },
        ],
        showName: true,
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { locale } = context.globals;

      const [currentLocale, setCurrentLocale] = useState(locale);

      // When the locale global changes
      // Set the new locale in i18n
      useEffect(() => {
        i18next.changeLanguage(locale).then(() => {
          setCurrentLocale(locale);
        });
      }, [locale]);

      return (
        <I18nextProvider i18n={i18next}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Story />
            </ThemeProvider>
          </QueryClientProvider>
        </I18nextProvider>
      );
    },
  ],
  loaders: [mswLoader],
};

export default preview;
