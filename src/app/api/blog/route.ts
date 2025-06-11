// ← GET (all), POST (create)


import { CollectionObjects, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
    const blogCollection = await dbConnect(CollectionObjects.blogCollection);
    const blogData = await req.json();

    try {

        const savedBlog = await blogCollection.insertOne(blogData);

        return NextResponse.json({ success: true, blog: savedBlog }, { status: 201 });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Unknown Error"
        return NextResponse.json({ success: false, error: message }, { status: 500 });
    }
}


export async function GET(req: Request) {
    const blogCollection = await dbConnect(CollectionObjects.blogCollection);
    try {
        const blogs = await blogCollection.find({}).toArray();
        console.log(blogs);
        
        return NextResponse.json({ success: true, blogs }, { status: 200 });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Unknown Error";
        return NextResponse.json({ success: false, error: message }, { status: 500 });
    }
}
