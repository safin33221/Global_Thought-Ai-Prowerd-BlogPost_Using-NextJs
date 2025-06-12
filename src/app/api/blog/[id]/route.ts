// ← GET (by id), PUT, DELETE
import { ObjectId } from "mongodb";
import { CollectionObjects, dbConnect } from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const blogCollection = await dbConnect(CollectionObjects.blogCollection)
        const blog = await blogCollection.findOne({ _id: new ObjectId(id) })
        return NextResponse.json({ blog }, { status: 200 })
    } catch (error) {
        if (error) {

            return NextResponse.json({ error: "Server error" }, { status: 500 });
        }
    }
}


export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const data = await req.json();
    console.log(id);
    console.log(data);

    try {
        const blogCollection = await dbConnect(CollectionObjects.blogCollection)
        const updateBlog = await blogCollection.updateOne({ _id: new ObjectId(id) }, { $set: data })
        return NextResponse.json({ message: 'Update success', data: updateBlog }, { status: 200 })
    } catch (error) {
        if (error) {

            return NextResponse.json({ error: 'Something Wrong' }, { status: 401 })
        }
        return NextResponse.json({ error: 'Server Error' }, { status: 500 })

    }

}