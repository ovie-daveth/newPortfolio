import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDatafromToken = (request: NextRequest) =>{
    try {
        const encodedToken = request.cookies.get("token")?.value || "";
        const decodedToken:any = jwt.verify(encodedToken, process.env.JWT_SECRET!);
        const {id} = decodedToken
        return id
    } catch (error: any) {
        throw new Error(error.message)
    }
}