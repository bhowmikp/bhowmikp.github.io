import App from "../components/App";
import { useAmp } from "next/amp";
import Head from "next/head";

export const config = { amp: "hybrid" };

export default function About() {
  const isAmp = useAmp();

  return (
    <App>
      <Head>
        <title>Prantar Bhowmik - About</title>
        {isAmp || <link rel="amphtml" href="/about?amp=1" />}
      </Head>

      <p>About Page</p>

      {isAmp ? <p>Amp page</p> : <p>Not amp page</p>}
    </App>
  );
}
