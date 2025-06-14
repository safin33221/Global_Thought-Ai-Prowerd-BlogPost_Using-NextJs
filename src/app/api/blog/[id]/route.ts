// ← GET (by id), PUT, DELETE
import { ObjectId } from "mongodb";
import { CollectionObjects, dbConnect } from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: { params: { id: string } }) {
    const { id } = context.params;

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


export async function PUT(req: NextRequest, context: { params: { id: string } }) {
    const { id } = context.params;
    const data = await req.json();


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

export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
    const { id } = context.params;
    try {
        const blogCollection = dbConnect(CollectionObjects.blogCollection)
        await blogCollection.deleteOne({ _id: new ObjectId(id) })
        return NextResponse.json({ message: "Deleted Success", }, { status: 200 })
    } catch (error) {
        if (error) {
            return NextResponse.json({ message: "Server Error" }, { status: 500 })
        }

    }

}