import { FirestoreService } from "../../service/FirestoreService";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await FirestoreService.getRecognition());
};
