import { database } from "../../database";

export default async (req, res) => {
  const data = [];
  const experienceRef = await database()
    .collection("experience")
    .orderBy("end", "desc")
    .get();

  experienceRef.forEach(experienceData => {
    data.push({ title: experienceData.id, ...experienceData.data() });
  });

  res.status(200).json(data);
};
