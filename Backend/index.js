import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

import cors from "cors";


dotenv.config();   // ✅ MUST COME FIRST

const app = express();
app.use(cors());   // ✅ Enable CORS for all routes
app.use(express.json());   // ✅ Enable JSON parsing for incoming requests

const URI = process.env.MONGO_URI || "mongodb://localhost:27017/BookCollectionDB";

mongoose.connect(URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

app.use(express.json());   // good practice

app.use("/book", bookRoute);
app.use("/user", userRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});