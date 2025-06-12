import { CollectionObjects, dbConnect } from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { email: string } }) {
    const { email } = params;
    const blogCollection = await dbConnect(CollectionObjects.blogCollection)
    if (!email) {
        return NextResponse.json({ error: 'Email is required' }, { status: 400 });

    }

    try {
        const blogs = await blogCollection.find({ "author.email": email }).toArray()
        return NextResponse.json({ blogs }, { status: 200 })
    } catch (error) {
        if (error) {

            return NextResponse.json({ error: "Server error" }, { status: 500 });
        }
    }
}