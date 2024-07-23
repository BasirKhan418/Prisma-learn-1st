
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const Putdata = async(name,email,password,phone)=>{
const res = await prisma.user.create({
    data:{
        name:name,
        email:email,
        password:password,
        phone:phone

    }
})
console.log(res)

}
const findManydata = async()=>{
    const res = await prisma.user.findMany();
    console.log(res)

}
findManydata();
const findPertadat = async()=>{
const res = await prisma.user.findFirst({
    where:{
        name:"basir"
    }
})
console.log("stqrt")
console.log(res)
console.log("stqrt")
}
 findPertadat();
 const updateData = async()=>{
const res = await prisma.user.update({
    where:{
        email:"basir@gmail.co.in"
    },
    data:{
        name:"basir khan bhai",
        phone:"9337203632"
    }
})
 }
updateData();
const deletedata = async()=>{
    const res = await prisma.user.delete({
        where:{
            email:"baiju@gmaiddl.co.in"
        }
    })

}
deletedata();
// Putdata("basir","basir@gmail.co.in","123456","1234567890");