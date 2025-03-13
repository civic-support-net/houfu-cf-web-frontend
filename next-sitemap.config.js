/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://houfu-cf.org',
  generateRobotsTxt: true,
  outDir: './out',
  exclude: [
    '/apple-touch-icon.png',
    '/browserconfig.xml',
    '/favicon-96x96.png',
    '/favicon.ico',
    '/favicon.svg',
    '/robots.txt',
    '/ogp.png',
    '/site.webmanifest',
    '/web-app-manifest-192x192.png',
    '/web-app-manifest-512x512.png',
  ],
}
