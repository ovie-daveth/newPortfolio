import { getDatafromToken } from "../../../../helpers/getDatafromToken";
import User from "../../../../model/userModel";
import { connect } from "../../../../dbConfig/dbConfig";

import { NextRequest,NextResponse } from "next/server";


connect()

export async function GET(request: NextRequest){
    try {
        const userId  = await  getDatafromToken(request)
        const user = await User.findOne({_id: userId}).select("-password")
        return NextResponse.json({
            message: "User found",
            data: user
        })
    } catch (error:any) {
        return NextResponse.json({error: error.messafe}, {status:500})
    }
}