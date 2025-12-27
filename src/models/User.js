import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Snippet" }]
});

const User = mongoose.model("User", userSchema);
export default User;
