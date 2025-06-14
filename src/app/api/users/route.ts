//get all users
"use server"

import { CollectionObjects, dbConnect } from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const userCollection = await dbConnect(CollectionObjects.userCollection)

    try {
        const user = await userCollection.find().toArray()
        return NextResponse.json(user, { status: 200 })
    } catch (error) {
        if (error) {
            NextResponse.json({ error: `Something Wrong : ${error}` }, { status: 401 })
        }
        NextResponse.json({ message: `Server Error ` }, { status: 500 })
    }
}

