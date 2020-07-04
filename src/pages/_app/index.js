import App from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const APP_NAME = "Prantar Bhowmik Website";
  const APP_DESCRIPTION = "This is the personal website of Prantar Bhowmik";
  const APP_WEBSITE = "https://prantar.com";
  return (
    <>
      <Head>
        <meta name="application-name" content={APP_NAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={APP_NAME} />
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />

        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />
        {/* <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      /> */}

        {/* <link rel='apple-touch-icon' sizes='180x180' href='/static/icons/apple-touch-icon.png' />
<link rel='icon' type='image/png' sizes='32x32' href='/static/icons/favicon-32x32.png' />
<link rel='icon' type='image/png' sizes='16x16' href='/static/icons/favicon-16x16.png' /> */}
        <link rel="manifest" href="/manifest.json" />
        {/* <link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#5bbad5' /> */}
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={APP_WEBSITE} />
        <meta name="twitter:title" content={APP_NAME} />
        <meta name="twitter:description" content={APP_DESCRIPTION} />
        {/* <meta name='twitter:image' content='https://yourdomain.com/static/icons/android-chrome-192x192.png' /> */}
        <meta name="twitter:creator" content="@bhowmikp" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:site_name" content={APP_NAME} />
        <meta property="og:url" content={APP_WEBSITE} />
        {/* <meta property='og:image' content='https://yourdomain.com/static/icons/apple-touch-icon.png' /> */}

        <title>Prantar Bhowmik - Homepage</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
