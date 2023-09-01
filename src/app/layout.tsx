import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { PropsWithChildren } from 'react';

import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: 'aelew', template: '%s | aelew' }
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn(inter.className, 'antialiased')}>
        <ThemeProvider defaultTheme="system" attribute="class" enableSystem>
          <div className="flex min-h-screen flex-col pb-8">
            <Header />
            <main className="container flex flex-1 flex-col">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
