"use server"

import { CollectionObjects, dbConnect } from "@/lib/dbConnect";
import { loginPayload } from "@/types/types";
import bcrypt from "bcrypt";



const loginUser = async (payload: loginPayload) => {
    const { email, password } = payload;
    const userCollection = await dbConnect(CollectionObjects.userCollection)
    const user = await userCollection.findOne({ email })
    if (!user) {
        return { error: `User with email ${email} does not exist` };
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        return { error: `Invalid password for user ${email}` };
    }
    return { user };
};

export default loginUser;