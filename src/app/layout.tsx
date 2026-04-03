import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'ScaleReach API Docs',
    template: '%s | ScaleReach API',
  },
  description: 'Turn any YouTube video into viral short-form clips with the ScaleReach API.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'ScaleReach API Docs',
    description: 'Turn any YouTube video into viral short-form clips with the ScaleReach API.',
    images: ['/og-image.png'],
    siteName: 'ScaleReach',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ScaleReach API Docs',
    description: 'Turn any YouTube video into viral short-form clips with the ScaleReach API.',
    images: ['/og-image.png'],
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
