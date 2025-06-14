"use server"
import { ObjectId } from 'mongodb'
import { CollectionObjects, dbConnect } from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    const id = params.id;
    const { role } = await req.json();
    console.log(id, role);
    try {
        const userCollection = await dbConnect(CollectionObjects.userCollection)
        const user = await userCollection.findOne({ _id: new ObjectId(id) })
        if (!user) {
            NextResponse.json({ message: "user not found" }, { status: 401 })
        }
        await userCollection.updateOne({ _id: new ObjectId(id) }, { $set: { role: role } })
        return NextResponse.json({ message: "user update success" }, { status: 200 });
    } catch (error) {
        if (error) {
            return NextResponse.json({ error: "something wrong" }, { status: 401 })
        }
        return NextResponse.json({ message: "server error" }, { status: 500 });
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    const id = params.id;
    try {
        const userCollection = await dbConnect(CollectionObjects.userCollection)
        await userCollection.deleteOne({ _id: new ObjectId(id) })
        return NextResponse.json({ message: "user delete successful" }, { status: 200 });
    } catch (error) {
        if (error) {
            return NextResponse.json({ error: "something wrong" }, { status: 401 })
        }
        return NextResponse.json({ message: "server error" }, { status: 500 });
    }


}