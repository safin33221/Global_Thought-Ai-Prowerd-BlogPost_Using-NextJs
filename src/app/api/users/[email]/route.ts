"use server"

import { CollectionObjects, dbConnect } from "@/lib/dbConnect"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, { params }: { params: { email: string } }) {

    const userCollection = await dbConnect(CollectionObjects.userCollection)
    try {
        const user = await userCollection.findOne({ email: params.email })
        if (!user) {
            return NextResponse.json({ message: "User not Found" }, { status: 404 })
        }
        return NextResponse.json(user)

    } catch (error) {
        return NextResponse.json({ message: "Server error", error }, { status: 500 });
    }


}

export async function PUT(req: NextRequest, { params }: { params: { email: string } }) {

    const userCollection = await dbConnect(CollectionObjects.userCollection)
    const { email } = params;
    const { url } = await req.json();
    console.log(email);
    console.log(url);

    try {

        const user = await userCollection.findOne({ email })
        if (!user) {
            return NextResponse.json({ message: "user not found" })
        }
        else {

            const updateResult = await userCollection.updateOne(
                { email },
                { $set: { avatarUrl: url } }
            );
            console.log(updateResult);
            if (updateResult.matchedCount === 0) {
                return NextResponse.json({ message: "User not found" }, { status: 404 });
            }

            return NextResponse.json({ message: "Profile image updated successfully" }, { status: 201 });
        }
    } catch (error) {
        return NextResponse.json({ message: "Server error", error }, { status: 500 });
    }


}


