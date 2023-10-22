import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { PropsWithChildren } from 'react';

import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

import '../styles/globals.css';

import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: 'aelew', template: '%s | aelew' }
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          data-website-id="c277bd71-c6de-47a5-af88-10e9a1a6b514"
          src="https://analytics.aelew.com/script.js"
          async
        />
      </head>
      <body className={cn(inter.className, 'antialiased')}>
        <ThemeProvider defaultTheme="dark" attribute="class" enableSystem>
          <div className="flex min-h-screen flex-col pb-8">
            <Header />
            <main className="container flex flex-1 flex-col">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
