import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";

// MUI
import { theme } from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
// MUI

import { QueryClient } from "@tanstack/react-query";
import { LoaderFunctionArgs } from "@remix-run/node";

import { changeLanguage } from "i18next";
import { supportedLngs } from "./i18n/i18n";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 3 minines
      staleTime: 180000,
    },
  },
});

export function HydrateFallback() {
  return <p>Загрузка...</p>;
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <html lang="en">
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <p>Root Error Boundry</p>
        {/* add the UI you want your users to see */}
        <Scripts />
      </body>
    </html>
  );
}

export async function clientLoader({ params }: LoaderFunctionArgs) {
  const locale = params.lang ?? "ru";

  if (!supportedLngs.includes(locale)) {
    throw new Response(null, {
      status: 404,
      statusText: `Not Found: Invalid language ${locale}`,
    });
  }

  changeLanguage(locale);

  return locale;
}

export function Layout({ children }: { children: React.ReactNode }) {
  const locale = useLoaderData<typeof clientLoader>();

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
