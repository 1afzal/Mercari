import express from "express";
const app = express();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
app.use(express.json());
import mongoose from "mongoose";
import { userModel } from "./db.js";
const JWT_SECRET = "it's_a_secret"

app.post("/signup", async function (req, res) {
  const { name, password, email } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = {
    name: name,
    password: hashedPassword,
    email: email,
  };
  try {
    await userModel.create(newUser);
    return res.status(200).json({
      status: "user created",
    });
  } catch (err) {
    return res.status(404).json({
      error: "cant create user",
    });
  }
});

app.get("/user", async function (req, res) {
  const email = req.body.email;
  const user = await userModel.findOne({
    email: email,
  });
  if (user) {
    res.status(200).send("found");
  } else {
    res.status(400).send("user not found....");
  }
});

app.post("/signin", async function (req, res) {
    const { email, password } = req.body;
  
    const userExists = await userModel.findOne({ email });
    if (!userExists) {
      return res.status(400).json({ message: "User not found" });
    }
  
    const passwordMatch = await bcrypt.compare(password, userExists.password);
    if (!passwordMatch) {
      return res.status(403).json({ message: "Invalid password" });
    }
  
    const token = jwt.sign({ id: userExists._id.toString() }, JWT_SECRET);
  
    return res.status(200).json({
      message: "Signin successful",
      token: token,
    });
  });
  

async function main() {
  try {
    console.log("Connecting to mongoDB database....");
    await mongoose.connect(
      "mongodb+srv://Afza1:Afzal123@secret.b5cmo.mongodb.net/todo-app"
    );
    console.log("connected successfully..");
  } catch (err) {
    console.log("error in connecting to DB");
  }
}

app.listen(6969, () => {
  console.log("Server live at port: 6969");
});
main();
