import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  // name: { type: String },
  price: { type: Number, required: true },
  category: { type: String },
  image: { type: String },
  title: { type: String, required: true },
  driveLink: { type: String } 
});

const Book = mongoose.model("Book", bookSchema);

export default Book;