import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  token: string;
};

export default function Login(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST")
    return res.status(405).end({ message: "Method not allowed" });
  const { id, password } = req.body;
  return res.status(200).send({ token: "token" });
}
