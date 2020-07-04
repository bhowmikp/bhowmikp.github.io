import { FirestoreService } from "../../service/FirestoreService";
import { FirestoreServiceModel } from "../../service/FirestoreService/firestoreService";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await FirestoreService.getExperience());
};
