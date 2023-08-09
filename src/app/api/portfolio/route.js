import Portfolio from "../../../model/Portfolio";
import {connect} from "../../../dbConfig/dbConfig"

connect();

export async function POST(request){
    try {
       
        const { title, imageUrl, desc, category, github, livelink } = await request.json();
        console.log(title, imageUrl, desc, category);

        const newPort = await Portfolio.create({
            title,
            imageUrl,
            desc,
            category,
            github,
            livelink
        });

        return new Response(JSON.stringify(newPort), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(null), { status: 500 })
    }
}

export async function GET(req){
    try {
        const getPort = await Portfolio.find({})
        console.log(getPort)
        return new Response(JSON.stringify(getPort), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(null), { status:500})
    }
}