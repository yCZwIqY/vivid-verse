import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import React from 'react';

import { Providers } from './providers';
import { Analytics } from '@vercel/analytics/react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body>
        <Analytics />
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>{children}</Providers>
      </body>
    </html>
  );
}
