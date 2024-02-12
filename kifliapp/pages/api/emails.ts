import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const email = req.body.email;

      const filePath = path.join(process.cwd(), "emailsDB.json");
      const fileData = fs.readFileSync(filePath).toString();
      const data = JSON.parse(fileData);
      data.subscibers.push({ email });
      fs.writeFileSync(filePath, JSON.stringify(data));

      res.status(200).json({ message: "Email added successfully!" });
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error: any) {
    res.status(500).json({ message: "Server Error: " + error.message });
  }
}
