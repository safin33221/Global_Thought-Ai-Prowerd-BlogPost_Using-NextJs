"use server"

import { CollectionObjects, dbConnect } from "@/lib/dbConnect"
import { NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: { email: string } }) {

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