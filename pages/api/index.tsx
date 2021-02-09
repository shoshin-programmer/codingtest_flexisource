import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PUT") {
    const updateUser = await prisma.user.update({
      where: {
        id: req.body.id,
      },
      data: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
      },
    });
  }
  if (req.method === "GET") {
    const user = await prisma.user.findFirst();
    res.json(user);
  } else {
    res.json({ message: "Method not allowed." });
  }
};

// res.status(500).json({ message: "Method not allowed." });
