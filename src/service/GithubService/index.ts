import axios from "axios";
import isNull from "lodash/isNull";

export const GithubService = {
  getGithubLanguages: async (): Promise<{}> => {
    const githubLanguage = {};

    const githubData = await axios.get(
      "https://api.github.com/users/bhowmikp/repos"
    );

    githubData.data.forEach(element => {
      let language = element.language;
      if (isNull(language)) {
        language = "Other";
      }

      if (!element.fork) {
        if (language in githubLanguage) {
          githubLanguage[language] = githubLanguage[language] + 1;
        } else {
          githubLanguage[language] = 1;
        }
      }
    });

    return githubLanguage;
  }
};
