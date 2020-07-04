import App from "../components/App";
import { useAmp } from "next/amp";
import { FirestoreService } from "../service/FireStorageService";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";

export const config = { amp: "hybrid" };

export default ({
  profilePicture
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const isAmp = useAmp();

  return (
    <App>
      <Head>
        <title>Prantar Bhowmik - Homepage</title>
        {isAmp || <link rel="amphtml" href="/index?amp=1" />}
      </Head>

      <p>Index Page</p>
      {isAmp ? (
        <amp-img src={profilePicture} height="50px" width="50px" />
      ) : (
        <img src={profilePicture} style={{ height: "50px" }} />
      )}
    </App>
  );
};

export const getStaticProps = async () => {
  const profilePicture = await FirestoreService.getProfilePciture();

  return {
    props: {
      profilePicture
    }
  };
};
