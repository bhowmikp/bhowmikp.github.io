import App from "../components/App";
import { useAmp } from "next/amp";
import Head from "next/head";
import { FireStorageService } from "../service/FireStorageService";
import { FirestoreService } from "../service/FirestoreService";
import { FirestoreServiceModel } from "../service/FirestoreService/firestoreService";
import { InferGetStaticPropsType } from "next";

export const config = { amp: "hybrid" };

export default function Experience({
  resumeLink,
  experienceJson,
  recognitionJson
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const isAmp = useAmp();

  const experience: FirestoreServiceModel.IExperience[] = JSON.parse(
    experienceJson
  );

  const recognition: FirestoreServiceModel.IRecognition[] = JSON.parse(
    recognitionJson
  );

  return (
    <App>
      <Head>
        <title>Prantar Bhowmik - Experience</title>
        {isAmp || <link rel="amphtml" href="/experience?amp=1" />}
      </Head>

      <p>Experience Page</p>

      <a href={resumeLink} title="Prantar-Resume.pdf" target="_blank">
        View Resume
      </a>

      {experience.map((entry, index) => {
        return (
          <div key={index}>
            <p>Employer: {entry.employer}</p>
            <p>Title: {entry.title}</p>
            <p>Time: {entry.time}</p>
            <ul>
              {entry.responsibility.map((responsibility, index) => {
                return <li key={index}>{responsibility}</li>;
              })}
            </ul>
          </div>
        );
      })}

      {recognition.map((entry, index) => {
        return (
          <div key={index}>
            <p>
              {entry.name} - {entry.year} - {entry.place}
            </p>
          </div>
        );
      })}
    </App>
  );
}

export const getStaticProps = async () => {
  const resumeLink = await FireStorageService.getResume();

  const experience: FirestoreServiceModel.IExperience[] = await FirestoreService.getExperience();
  const experienceJson = JSON.stringify(experience);

  const recognition: FirestoreServiceModel.IRecognition[] = await FirestoreService.getRecognition();
  const recognitionJson = JSON.stringify(recognition);

  return {
    props: {
      resumeLink,
      experienceJson,
      recognitionJson
    }
  };
};
