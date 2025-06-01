import { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import "../styles/index.css";
import Script from "next/script";
import * as ga from "../lib/google-analytics";
import Layout from "@/layout";

function App({ Component, pageProps }) {
  // C. SETUP OF GA PAGE VIEWS
  const router = useRouter();
  useEffect(() => {
    // C1: Declare function which passes clicked page url to GA4 "event" config function
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    // C2: Subscribe to the change event when component mounts
    router.events.on("routeChangeComplete", handleRouteChange);
    // C3: Unsubscribe from change event on unmount
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <Fragment>
      {/* Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
            
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>

      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="GREG is a fast, modern web app that provides detailed country information using the REST Countries API. Explore population, region, flags, and more in one place."
        />
        <meta
          name="keywords"
          content="GREG, country information app, REST Countries API, country data, world countries, population, geography, flags, modern web app"
        />
        <meta name="author" content="Vorakorn Taweetawon" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default App;
