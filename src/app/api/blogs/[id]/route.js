import Blog from "../../../../model/Blog";
import { connect } from "../../../../dbConfig/dbConfig";


export async function GET(request, { params }) {
    try {
      const {id} = params; // Assuming your route parameter is named 'blogId'
      await connect();
     const response = await Blog.findOne({_id: id});
  
      return new Response(JSON.stringify(response), { status: 200 });
    } catch (error) {
      console.error(error.message);
      return new Response(JSON.stringify(null), { status: 500 });
    }
  }