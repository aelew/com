import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction, LoaderFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from '@remix-run/react';
import {
  PreventFlashOnWrongTheme,
  Theme,
  ThemeProvider,
  useTheme
} from 'remix-themes';

import { Header } from './components/header';
import { cn } from './lib/utils';
import { themeSessionResolver } from './sessions.server';
import styles from './tailwind.css';

export const links: LinksFunction = () => [
  { rel: 'preload', href: '/fonts/GeistVariableVF.woff2' },
  { rel: 'stylesheet', href: styles },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : [])
];

export const loader: LoaderFunction = async ({ request }) => {
  const { getTheme } = await themeSessionResolver(request);
  return { theme: getTheme() };
};

export function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
        <script
          data-website-id="c277bd71-c6de-47a5-af88-10e9a1a6b514"
          src="https://analytics.aelew.com/script.js"
          data-domains="aelew.com"
          async
        />
      </head>
      <body
        className={cn(
          'flex min-h-screen flex-col',
          theme === Theme.DARK && 'dark'
        )}
      >
        <Header />
        <main className="container flex flex-1 flex-col pb-8">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider
      specifiedTheme={data.theme ?? Theme.DARK}
      themeAction="/action/theme"
    >
      <App />
    </ThemeProvider>
  );
}
