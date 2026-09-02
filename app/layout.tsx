import type { Metadata } from 'next';
import './globals.css';

const noCacheScript = `
(function () {
  var cacheKey = '__fresh';

  try {
    var currentUrl = new URL(window.location.href);

    if (!currentUrl.searchParams.has(cacheKey)) {
      currentUrl.searchParams.set(cacheKey, Date.now().toString());
      window.location.replace(currentUrl.toString());
      return;
    }

    currentUrl.searchParams.delete(cacheKey);
    var cleanQuery = currentUrl.searchParams.toString();
    var cleanUrl = currentUrl.pathname + (cleanQuery ? '?' + cleanQuery : '') + currentUrl.hash;
    window.history.replaceState(null, document.title, cleanUrl);
  } catch (_) {}

  document.addEventListener('click', function (event) {
    var element = event.target;

    while (element && element !== document) {
      if (element.tagName === 'A' && element.getAttribute('data-no-cache') === 'true') {
        try {
          var downloadUrl = new URL(element.href);
          downloadUrl.searchParams.set(cacheKey, Date.now().toString());
          element.href = downloadUrl.toString();
        } catch (_) {}
        return;
      }

      element = element.parentNode;
    }
  }, true);
})();
`;

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
      <head>
        <meta httpEquiv="Cache-Control" content="no-store, no-cache, must-revalidate, max-age=0" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <script dangerouslySetInnerHTML={{ __html: noCacheScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
