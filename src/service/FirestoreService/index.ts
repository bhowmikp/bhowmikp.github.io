import { database } from "../../firebase";
import { FirestoreServiceModel } from "./firestoreService";

export const FirestoreService = {
  getExperience: async (): Promise<FirestoreServiceModel.IExperience[]> => {
    const data = [];
    const experienceRef = await database
      .collection("experience")
      .orderBy("end", "desc")
      .get();

    experienceRef.forEach(experienceData => {
      data.push({ title: experienceData.id, ...experienceData.data() });
    });

    return data;
  },

  getProjects: async (): Promise<FirestoreServiceModel.IProjects[]> => {
    const data = [];
    const projectsRef = await database
      .collection("projects")
      .orderBy("order", "desc")
      .get();

    projectsRef.forEach(projectsData => {
      data.push({ title: projectsData.id, ...projectsData.data() });
    });

    return data;
  },

  getRecognition: async (): Promise<FirestoreServiceModel.IRecognition[]> => {
    const data = [];
    const recognitionRef = await database
      .collection("recognition")
      .orderBy("year", "desc")
      .get();

    recognitionRef.forEach(recognitionData => {
      data.push({ title: recognitionData.id, ...recognitionData.data() });
    });

    return data;
  }
};
