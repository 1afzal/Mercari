import { connectDB, client } from "./db.js";

async function main() {
  const db = await connectDB();
  const users = db.collection("users");

  async function insertDB() {
    try {
      await users.insertMany([
        { "name": "afzal", "age": 22, "work": "SDE-2" },
        { "name": "rishan", "age": 25, "work": "Frontend Developer" },
        { "name": "hassan", "age": 19, "work": "Intern" },
        { "name": "sana", "age": 28, "work": "Data Analyst" },
        { "name": "mohammed", "age": 24, "work": "Backend Engineer" },
        { "name": "aisha", "age": 21, "work": "UI/UX Designer" },
        { "name": "faiz", "age": 26, "work": "DevOps Engineer" },
        { "name": "rahul", "age": 23, "work": "QA Tester" },
        { "name": "mehak", "age": 27, "work": "Project Manager" },
        { "name": "ananya", "age": 20, "work": "Software Intern" },
        { "name": "tariq", "age": 30, "work": "Full Stack Developer" },
        { "name": "neha", "age": 22, "work": "Content Strategist" },
        { "name": "zain", "age": 29, "work": "Mobile App Developer" },
        { "name": "rehan", "age": 24, "work": "Machine Learning Engineer" },
        { "name": "arjun", "age": 23, "work": "System Administrator" },
        { "name": "kavya", "age": 21, "work": "Graphic Designer" },
        { "name": "imran", "age": 31, "work": "Product Manager" },
        { "name": "rida", "age": 19, "work": "Junior Developer" },
        { "name": "yasir", "age": 28, "work": "Database Administrator" },
        { "name": "zoha", "age": 26, "work": "Cloud Engineer" }]
      )
      console.log("Inserted successfully ✅");
    } catch (err) {
      console.error("Error inserting:", err.message);
    }
  }

  async function deleteDB() {
    try {
      await users.deleteMany({});
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

  async function sort(){
    try{
        const res = await users.find({}).sort({age:1,name: -1}).toArray();
        if(res){
            console.log("found sorted")
        }
        else{
            console.log("couldnt find sorted");
        }
        console.log(res);
    }
    catch(err){
        console.log(err.message)
    }
  }
//    await insertDB();
  await updateDB();
  await AgeGT();
  await AgeLT();
  await sort();
    // await deleteDB();

  await client.close();
  console.log("Connection closed 🔒");
}

main();
