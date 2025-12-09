// app/manifest.js

export default function manifest() {
  return {
    name: 'CAIOLOG Logistics',
    short_name: 'Caiolog',
    description: 'Sistema de gestão logística e entregas',
    start_url: '/',
    display: 'standalone', // Isso faz sumir a barra do navegador!
    background_color: '#0f172a',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/icon.png', // Vamos garantir que essa imagem exista no passo 3
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}