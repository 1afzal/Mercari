import { MongoClient } from "mongodb";
const client = new MongoClient("mongodb+srv://Afza1:Afzal123@secret.b5cmo.mongodb.net/mongo-practice");

export async function connectDB(){
    try{
        await client.connect();
        console.log("connected to MongoDB database");
        return client.db("mongo-practice");
    }
    catch(err){
        console.log("error in connecting to DB",err.message);
    }
}

export { client };