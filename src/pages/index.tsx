import App from "../components/App";
import { useAmp } from "next/amp";
import { FireStorageService } from "../service/FireStorageService";
import { FirestoreService } from "../service/FirestoreService";
import { FirestoreServiceModel } from "../service/FirestoreService/firestoreService";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";

export const config = { amp: "hybrid" };

export default ({
  profilePicture,
  about
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const isAmp = useAmp();

  return (
    <App>
      <Head>
        <title>Prantar Bhowmik - Homepage</title>
        {isAmp || <link rel="amphtml" href="/index?amp=1" />}
      </Head>

      <p>Home Page</p>
      {isAmp ? (
        <amp-img
          src={profilePicture}
          alt="profile-picture"
          height="50px"
          width="50px"
        />
      ) : (
        <img
          src={profilePicture}
          alt="profile-picture"
          style={{ height: "50px" }}
        />
      )}

      {about.aboutText.text.map((entry, index) => {
        return <p key={index}>{entry}</p>;
      })}
    </App>
  );
};

export const getStaticProps = async () => {
  const profilePicture = await FireStorageService.getProfilePciture();
  const about: FirestoreServiceModel.IAbout = await FirestoreService.getAbout();

  return {
    props: {
      profilePicture,
      about
    }
  };
};
