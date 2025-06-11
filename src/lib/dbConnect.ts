
import { MongoClient, ServerApiVersion } from 'mongodb';

export const CollectionObjects = {
    userCollection: "users",
    blogCollection:"blogs"
}
export const dbConnect = (collectionName: string) => {


    const uri = process.env.MONGODB_URI || ''
    
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri , {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    console.log('Connected to MongoDB successfully ');
    return client.db(process.env.DB_Name).collection(collectionName);
    // Note: Ensure that the environment variables DB_Username, DB_Password, and DB_Name are set in your .env file.
}

