import type { LinksFunction, LoaderFunctionArgs } from '@remix-run/cloudflare';
import { cssBundleHref } from '@remix-run/css-bundle';
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
import { Spotlight } from './components/spotlight';
import { cn } from './lib/utils';
import { themeSessionResolver } from './sessions.server';
import styles from './tailwind.css';

export const links: LinksFunction = () => [
  { rel: 'preload', href: '/fonts/GeistVariableVF.woff2' },
  { rel: 'icon', href: '/favicon.png', type: 'image/png', sizes: '256x256' },
  { rel: 'stylesheet', href: styles },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : [])
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
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
          src="https://analytics.aelew.dev/js/script.outbound-links.js"
          data-domain="aelew.com"
          defer
        />
      </head>
      <body
        className={cn(
          'relative flex min-h-screen flex-col',
          theme === Theme.DARK && 'dark'
        )}
      >
        <div className="fixed -z-10 h-screen w-full bg-gradient-to-br from-violet-100 via-teal-50 to-amber-100 dark:hidden" />
        <Header />
        <main className="container flex flex-1 flex-col pb-8">
          <Outlet />
          <Spotlight
            ellipseClassName="fill-orange-200 dark:fill-white/75"
            className="-top-40 left-0 md:-top-20 md:left-60"
          />
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
