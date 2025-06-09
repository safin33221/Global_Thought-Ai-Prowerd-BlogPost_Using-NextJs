

import { CollectionObjects, dbConnect } from "@/lib/dbConnect";
import { loginPayload } from "@/types/types";
import bcrypt from "bcrypt";
import toast from "react-hot-toast";



const loginUser = async (payload: loginPayload) => {
    const { email, password } = payload;
    const userCollection = await dbConnect(CollectionObjects.userCollection)
    const user = await userCollection.findOne({ email })
    if (!user) {
        console.log(`User with email ${email} does not exist`);
        return;
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        toast.error(`Invalid password for user ${email}`);
        return;
    }
    return user;
};

export default loginUser;