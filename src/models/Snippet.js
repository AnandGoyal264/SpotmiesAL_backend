import mongoose from "mongoose";

const snippetSchema = new mongoose.Schema(
  {
    title: String,
    language: String,
    description: String,
    code: String,
    tags: [String],
    rating: { type: Number, default: 0 },
    ratingsCount: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
);

// Text Index for Fast Search
snippetSchema.index({
  title: "text",
  description: "text",
  code: "text",
  tags: "text"
});

const Snippet = mongoose.model("Snippet", snippetSchema);
export default Snippet;
