import { Fragment } from "react";
import Head from "next/head";
import "../styles/index.css";

import Layout from "@/layout";

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default App;
