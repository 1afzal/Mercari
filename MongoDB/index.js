import { connectDB, client } from "./db.js";

async function main() {
  const db = await connectDB();
  const users = db.collection("users");

  async function insertDB() {
    try {
      await users.insertOne({
        name: "afzal",
        age: 22,
        work: "SDE-2"
      });
      console.log("Inserted successfully ✅");
    } catch (err) {
      console.error("Error inserting:", err.message);
    }
  }

  async function deleteDB() {
    try {
      await users.deleteOne({});
      console.log("Successfully deleted all ✅");
    } catch (err) {
      console.error("Couldn't delete:", err.message);
    }
  }

  async function updateDB() {
    try {
      const result = await users.updateOne(
        { name: "afzal" },
        { $set: { name: "Rishan" } }
      );
      if (result.matchedCount === 0) {
        console.log("No matching document found ❌");
      } else {
        console.log("Successfully updated ✅");
      }
    } catch (err) {
      console.error("Error updating:", err.message);
    }
  }

  async function AgeGT(){
    try{
       const old = await users.findOne({age:{$gt:20}})
       console.log(old);
    }
    catch(err){
        console.log("error in finding old");
    }
  }

  async function AgeLT(){
    try{
        const young = await users.findOne({age:{$lt: 23}});
        if(young){
            console.log("Sucessfully fetched young ones")
        }
        else{
            console.log("unsucessful in fetching young ones");
        }
        
        console.log(young);
    }
    catch(err){
        console.log("error in finding young ones")
    }
  }

  await insertDB();
  await updateDB();
  await AgeGT()
  await AgeLT();

  await client.close();
  console.log("Connection closed 🔒");
}

main();
