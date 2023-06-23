import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    error:
      "에러가 발생되었습니다.",
  });
  return res.end();
}
