import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function signup(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  req.method === 'GET' && res.status(200).json({ name: 'Example' });
  res.status(200).json({ name: 'Examplea' });
}
