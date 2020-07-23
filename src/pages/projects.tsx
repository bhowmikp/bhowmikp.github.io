import App from "../components/App";
import { useAmp } from "next/amp";
import Head from "next/head";
import { InferGetServerSidePropsType } from "next";
import { FirestoreService } from "../service/FirestoreService";
import { FirestoreServiceModel } from "../service/FirestoreService/firestoreService";
import { GithubService } from "../service/GithubService";
import GithubLanguageGraph from "../components/GithubLanguageGraph";

export const config = { amp: "hybrid" };

export default ({
  projectsJson,
  githubLanguagesJson
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const isAmp = useAmp();

  const projects: FirestoreServiceModel.IProjects[] = JSON.parse(projectsJson);
  const githubLanguages = JSON.parse(githubLanguagesJson);

  return (
    <App>
      <Head>
        <title>Prantar Bhowmik - Projects</title>
        {isAmp || <link rel="amphtml" href="/projects?amp=1" />}
      </Head>

      <p>Projects Page</p>
      <GithubLanguageGraph data={githubLanguages} />

      {projects.map((project, index) => {
        return (
          <div key={index}>
            <p>{project.name}</p>

            {project.links.map((entry, index) => {
              return (
                <span key={index}>
                  {Object.keys(entry).map((data, index) => {
                    return (
                      <a href={entry[data]} key={index}>
                        {data}
                      </a>
                    );
                  })}
                </span>
              );
            })}

            <ul>
              {project.features.map((data, index) => {
                return <li key={index}>{data}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </App>
  );
};

export const getServerSideProps = async () => {
  const projects: FirestoreServiceModel.IProjects[] = await FirestoreService.getProjects();
  const projectsJson = JSON.stringify(projects);

  const githubLanguages = await GithubService.getGithubLanguages();
  const githubLanguagesJson = JSON.stringify(githubLanguages);

  return {
    props: {
      projectsJson,
      githubLanguagesJson
    }
  };
};
