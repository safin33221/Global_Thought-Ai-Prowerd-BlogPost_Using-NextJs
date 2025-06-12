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