"use server"
import bcrypt from "bcrypt"
import { CollectionObjects, dbConnect } from "@/lib/dbConnect";
import { RegisterPayload } from "@/types/types"
import toast from "react-hot-toast";

const registerUser = async (payload: RegisterPayload) => {
    const { name, email, password } = payload;
    console.log(name,email);

    if (!name || !email || !password) {
        toast.error("All fields are required");
        return;
    }
    const userCollection = await dbConnect(CollectionObjects.userCollection);
    const existingUser = await userCollection.findOne({ email });
    if (!existingUser) {
        const hashPassword = await bcrypt.hash(password, 10);
        payload.password = hashPassword;
        const result = await userCollection.insertOne(payload)
        result.insertedId.toString();
        return result;
    }
    console.log(`User with email ${email} already exists`);
    return { acknowledged: false, message: "User already exists" };
}

export default registerUser;