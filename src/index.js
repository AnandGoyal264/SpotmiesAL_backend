import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import snippetRoutes from "./routes/snippetRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();
app.use(cors({
  origin: "*"
}));



app.use(express.json());

connectDB();

// Routes
app.use("/api/snippets", snippetRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Spotmies AI Backend Running 🚀");
});
app.get("/health", (req,res)=>{
  res.json({status:"OK"});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


export default app;

