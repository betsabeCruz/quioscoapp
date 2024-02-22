import { PrismaClient } from "@prisma/client"



export default async function handler(req, res) {
  const prisma= new PrismaClient()
  const categorias= await prisma.category.findMany({
    include: {
        product: true,
    },
  })

  res.status(200).json(categorias)
}