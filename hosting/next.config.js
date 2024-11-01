const resourceUrls = `https://www.googletagmanager.com https://fonts.gstatic.com https://static.hsappstatic.net https://meetings.hubspot.com`;

const cspHeader = `
    default-src 'self' ${resourceUrls};
    script-src 'self' 'unsafe-eval' 'unsafe-inline'  ${resourceUrls};
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self'  ${resourceUrls};
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`
 
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
    ]
  },
}