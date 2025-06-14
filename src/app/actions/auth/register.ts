"use server"
import bcrypt from "bcrypt"
import { CollectionObjects, dbConnect } from "@/lib/dbConnect";
import { User } from "@/types/types"
import toast from "react-hot-toast";

const registerUser = async (payload: User) => {
    const { name, email, password } = payload;


    if (!name || !email || !password) {
        toast.error("All fields are required");
        return;
    }
    const user = {
        ...payload,

        role: payload.role ?? "USER",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),

    }
    const userCollection = await dbConnect(CollectionObjects.userCollection);
    const existingUser = await userCollection.findOne({ email });
    if (!existingUser) {
        const hashPassword = await bcrypt.hash(password, 10);
        user.password = hashPassword;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { _id, ...userWithoutId } = user;
        const result = await userCollection.insertOne(userWithoutId)
        result.insertedId.toString();
        return result;
    }

    return { acknowledged: false, message: "User already registered" };
}

export default registerUser;