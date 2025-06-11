// src/app/api/blog/route.ts
import { CollectionObjects, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
    const blogCollection = await dbConnect(CollectionObjects.blogCollection);
    const blogData = await req.json();

    try {

        const savedBlog = await blogCollection.insertOne(blogData);

        return NextResponse.json({ success: true, blog: savedBlog }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
