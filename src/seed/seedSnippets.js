import mongoose from "mongoose";
import dotenv from "dotenv";
import Snippet from "../models/Snippet.js";

dotenv.config();

const snippets = [
  {
    title: "React useState Example",
    language: "JavaScript",
    description: "Basic React state handling",
    code: `const [count, setCount] = useState(0);`,
    tags: ["react", "hooks", "state"]
  },
  {
    title: "Express Server Setup",
    language: "JavaScript",
    description: "Simple express server",
    code: `
      import express from 'express';
      const app = express();
      app.listen(5000, ()=> console.log("Running"));
    `,
    tags: ["node", "express", "backend"]
  },
  {
    title: "MongoDB Connection",
    language: "JavaScript",
    description: "Connect mongoose to MongoDB",
    code: `
      mongoose.connect(process.env.MONGO_URI)
    `,
    tags: ["mongodb", "database", "mongoose"]
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");

    await Snippet.deleteMany();
    console.log("Old Data Removed");

    await Snippet.insertMany(snippets);
    console.log("Sample Data Inserted");

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
