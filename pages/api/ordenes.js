import { PrismaClient } from "@prisma/client"


export default async function handler(req, res){
    const prisma= new PrismaClient()

    //Obtener ordenes
    const ordenes= await prisma.order.findMany({
      where:{
        state: false
      }
    })

    res.status(200).json(ordenes);

    //Crear ordenes

    if(req.method === "POST"){
        const order= await prisma.order.create({
            data: {
                name: req.body.name,
                total: req.body.total,
                order: req.body.order,
                date: req.body.date
            },
        });
        res.status(200).json(order);
    } 

}