"use server"

import { CollectionObjects, dbConnect } from "@/lib/dbConnect"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    const email = request.nextUrl.pathname.split("/").pop();
   
    const userCollection = await dbConnect(CollectionObjects.userCollection)
    try {
        const user = await userCollection.findOne({ email })
        if (!user) {
            return NextResponse.json({ message: "User not Found" }, { status: 404 })
        }
        return NextResponse.json(user)

    } catch (error) {
        return NextResponse.json({ message: "Server error", error }, { status: 500 });
    }


}



export async function PUT(req: NextRequest) {
  // 1️⃣  Grab the email from the path  …/by‑email/<email>
  const email = req.nextUrl.pathname.split("/").pop();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  // 2️⃣  Parse the JSON body safely
  let body: { url?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { url } = body;

  if (!url) {
    return NextResponse.json({ error: "`url` field is required" }, { status: 400 });
  }

  try {
    const userCollection = await dbConnect(CollectionObjects.userCollection);

    // 3️⃣  Update the user’s avatarUrl
    const updateResult = await userCollection.updateOne(
      { email },
      { $set: { avatarUrl: url } }
    );

    if (updateResult.matchedCount === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Profile image updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}



