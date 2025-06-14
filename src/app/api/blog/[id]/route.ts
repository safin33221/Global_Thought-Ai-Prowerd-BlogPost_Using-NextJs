import { ObjectId } from "mongodb";
import { CollectionObjects, dbConnect } from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

// Get blog by ID
export async function GET(req: NextRequest) {
    // const id = req.url.split("/").pop(); // extract ID from URL
    const url = new URL(req.url);
    const id = url.searchParams.get("id")

    if (!id || !ObjectId.isValid(id)) {
        return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    try {
        const blogCollection = await dbConnect(CollectionObjects.blogCollection);
        const blog = await blogCollection.findOne({ _id: new ObjectId(id) });
        return NextResponse.json({ blog }, { status: 200 });
    } catch (error) {
        if (error) {

            return NextResponse.json({ error: "Server error" }, { status: 500 });
        }
    }
}

// Update blog by ID
export async function PUT(req: NextRequest) {
    const id = req.url.split("/").pop();

    if (!id || !ObjectId.isValid(id)) {
        return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const data = await req.json();

    try {
        const blogCollection = await dbConnect(CollectionObjects.blogCollection);
        const updateBlog = await blogCollection.updateOne({ _id: new ObjectId(id) }, { $set: data });
        return NextResponse.json({ message: "Update success", data: updateBlog }, { status: 200 });
    } catch (error) {
        if (error) {

            return NextResponse.json({ error: "Server Error" }, { status: 500 });
        }
    }
}

// Delete blog by ID
export async function DELETE(req: NextRequest) {
    const id = req.url.split("/").pop();

    if (!id || !ObjectId.isValid(id)) {
        return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    try {
        const blogCollection = await dbConnect(CollectionObjects.blogCollection);
        await blogCollection.deleteOne({ _id: new ObjectId(id) });
        return NextResponse.json({ message: "Deleted Success" }, { status: 200 });
    } catch (error) {
        if (error) {

            return NextResponse.json({ message: "Server Error" }, { status: 500 });
        }
    }
}
