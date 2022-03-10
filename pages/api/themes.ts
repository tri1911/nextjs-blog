import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);
    res.status(200).json({ method: "POST" });
    return;
  } else if (req.method === "GET") {
    res.status(200).json({ method: "GET" });
    return;
  }

  res.status(405).send({ message: "Not allowed" });
};
