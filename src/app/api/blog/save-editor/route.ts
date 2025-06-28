import { CollectionObjects, dbConnect } from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import objectId from 'mongoose'

export async function POST(req: Request) {
    try {
        const { content, isDraft } = await req.json();

        if (!content) {
            return NextResponse.json({ success: false, message: 'Content is required' }, { status: 400 });
        }
        console.log(content, isDraft);

        const EditorsCollection = await dbConnect(CollectionObjects.EditorsCollection);

        // const filter = { _id:  new objectId(content?._id) }; // You can customize this key to identify document
        // const update = {
        //     $set: {
        //         content,
        //         isDraft: !!isDraft,
        //         updatedAt: new Date(),
        //     },
        // };
        // const options = { upsert: true };

        await EditorsCollection.insertOne({content,isDraft});

        return NextResponse.json({ success: true, message: isDraft ? 'Draft saved' : 'Content saved' }, { status: 200 });
    } catch (error) {
        console.error('Error saving editor content:', error);
        return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
}