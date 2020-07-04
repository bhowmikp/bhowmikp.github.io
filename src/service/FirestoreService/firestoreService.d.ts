export declare namespace FirestoreServiceModel {
  interface IExperience {
    title: string;
    end: {
      seconds: number;
      nanoseconds: number;
    };
    start: {
      seconds: number;
      nanoseconds: number;
    };
    time: string;
    abbr: string;
    employer: string;
    responsibility: string[];
  }

  interface IProjects {
    title: string;
    order: number;
    features: string[];
    name: string;
    links: any[];
  }

  interface IRecognition {
    title: string;
    place: string;
    year: string;
    name: string;
  }

  interface IAbout {
    aboutText?: {
      text?: string[];
    };
  }
}
