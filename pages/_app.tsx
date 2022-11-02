import Head from 'next/head'
import Script from 'next/script'
import Sidebar from '../components/sidebar'
import SunAndMoon from '../components/sunandmoon'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
  <div className='page'>
    <Head>
      <title>Studio DMLA Inc.</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta name="msapplication-TileColor" content="#232f32" />
      <meta name="theme-color" content="#232f32" />
      <meta name="apple-mobile-web-app-title" content="Studio DMLA" />
      <meta name="application-name" content="Studio DMLA" />

      <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/android-chrome-192x192.png" />
      <link rel="mask-icon" href="/assets/icons/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="description" content="At Studio DMLA we believe that work should go beyond the industrial model, and we build a culture that empowers remote collaboration, autonomy, results" />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-175451161-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-175451161-1');
        `}
      </Script>
    <Script
      type="text/javascript"
      id="hs-script-loader"
      strategy="afterInteractive"
      src="//js.hs-scripts.com/6868694.js"
    ></Script>
  <Script src="//js.hsforms.net/forms/shell.js"></Script>
    <Sidebar />
    <div className="route"> 
      <Component {...pageProps} />
    </div>
    <SunAndMoon />
  </div>)
}

export default MyApp
