
import { connect } from '../../../dbConfig/dbConfig'
import Blog from '../../../model/Blog';

export async function GET(req) {
  await connect()

  try {
      const blogs = await Blog.find({})
      return new Response(JSON.stringify(blogs), { status: 200 })
  } catch (error) {
      return new Response(JSON.stringify(null), { status: 500 })
  }
}

export async function POST(request) {
  try {
    await connect()
    const { title, summary, videoUrl, desc,category, imageUrl } = await request.json();
    console.log(title, summary, videoUrl, desc,category, imageUrl);

    const newBlog = await Blog.create({
      title,
      summary,
      imageUrl,
      videoUrl,
      desc,
      category
    });
    console.log(newBlog);
    return new Response(JSON.stringify(newBlog), { status: 200 })
  } catch (error) {
    console.error(error.message);
    return new Response(JSON.stringify(null), { status: 500 })
  }
}


export async function DELETE(request) {
  try {
    await connect();
    const blogId =  request.nextUrl.searchParams.get("id");
    console.log(blogId)

    const deletedBlog = await Blog.findByIdAndDelete(blogId);
    if (!deletedBlog) {
      return new Response(JSON.stringify(null), { status: 404 });
    }

    return new Response(JSON.stringify(deletedBlog), { status: 200 });
  } catch (error) {
    console.error(error.message);
    return new Response(JSON.stringify(null), { status: 500 });
  }
}

export async function PUT(request) {
  try {
    await connect();
    const blogId =  request.nextUrl.searchParams.get("id");
    console.log(blogId)

    const requestData = await request.json();

    const {
      title,
      summary,
      desc,
      category,
      videoUrl} = await requestData

      console.log(requestData)

    const updatedBlog = await Blog.findByIdAndUpdate(blogId, { title, summary, desc, category, videoUrl});
    if (!updatedBlog) {
      return new Response(JSON.stringify(null), { status: 404 });
    }

    return new Response(JSON.stringify(updatedBlog), { status: 200 });
  } catch (error) {
    console.error(error.message);
    return new Response(JSON.stringify(null), { status: 500 });
  }
}








