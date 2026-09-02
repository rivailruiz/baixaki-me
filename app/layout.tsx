import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://baixaki.me'),
  title: 'TV Apps — Aplicativos para sua TV',
  description: 'Baixe seus aplicativos favoritos diretamente pelo navegador da sua TV.',
  openGraph: {
    title: 'TV Apps — Aplicativos para sua TV',
    description: 'Seus apps favoritos, direto na TV.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'TV Apps' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TV Apps — Aplicativos para sua TV',
    description: 'Seus apps favoritos, direto na TV.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
