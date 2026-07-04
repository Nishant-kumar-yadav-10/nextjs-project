import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient()

export async function POST(req:NextRequest){
    const data=await req.json();
    await prisma.user.create({
        data:{email:data.email,
        password:data.password}
    })

    return NextResponse.json({
        message:"user successfully signed in"
    })
}