import Portfolio from "../../../../model/Portfolio";
import { connect } from "../../../../dbConfig/dbConfig";


export async function GET(req, {params}){
    try {
        const {id} = params;
        await connect()
        const getPort = await Portfolio.find({_id: id})
        return new Response(JSON.stringify(getPort), { status: 200 })
    } catch (error) {
        // console.log(error);
        return new Response(JSON.stringify(null), { status:500})
    }
}