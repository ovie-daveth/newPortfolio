import { connect } from "../../../../dbConfig/dbConfig"; 
import User from "../../../../model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken";

 
connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const { email, password} = reqBody

        //check if user already exists in the database
        const user = await User.findOne({email})

        if(!user){
           return NextResponse.json({
            error: 'User not found',
           }, {status: 404})
        } 

        //validate password
        const validatePassword = await bcryptjs.compare(password, user.password)

        if(!validatePassword){
            return NextResponse.json({error: 'Invalid password'});
        } else{
            
        //create tokenData

        const tokeData = {
            id: user._id, 
            username: user.username,
            email: user.email
        }

        //CREATE token

        const token = jwt.sign(tokeData, process.env.JWT_SECRET, {expiresIn: '1d'})

        const response =  NextResponse.json({
            message: "Login Succcesfull",
            success: true,
            user: user
        })

        response.cookies.set("token", token, {httpOnly: true})

        return response;
        }

        
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
       
    }
}
