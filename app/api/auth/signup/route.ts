import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient()

export async function POST(req:NextRequest){

    const data=await req.json()
    const hashPassword= await bcrypt.hash(data.password,10)
    await prisma.user.create({
data:{email:data.email,
    password:hashPassword,
    name:data.name,
},
    })
    return NextResponse.json({
        message:"User Created Successfully"
    })
}