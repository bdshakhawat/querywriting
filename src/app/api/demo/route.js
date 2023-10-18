


import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


export async function POST(req,res){
        try {
            const prisma = new PrismaClient();
            const result = await prisma.User.create({
                data:
                   {
                    firstName:"John",
                    lastName:"Doe",
                    mobile:"1234567890",
                    email:"john.doe@gmail.com",
                    password:"123456",
                    admin:false
                   }
                   

                 
                })

            return NextResponse.json({ Status: "Success", data: result })
        } 
        
        
        catch (err) {
            // console.error(err);
            return NextResponse.json({ Status: "Error", data: result })
        }
            
    }

