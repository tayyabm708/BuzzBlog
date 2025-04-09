import express from "express";
import fs from 'fs';
import { mongoose } from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
import path from "path";

import cookieParser from "cookie-parser";

dotenv.config();
const dbUriPath = "./secrets/db_uri.txt";
console.log(dbUriPath)

let mongoURI; // fallback
if (dbUriPath && fs.existsSync(dbUriPath)) {
  mongoURI = fs.readFileSync(dbUriPath, 'utf8').trim();
}
console.log(mongoURI)
mongoose
  // .connect(process.env.MONGO)
  .connect("mongodb+srv://tayyabm708:5A5auLJDhh24cYc@buzzblog.qqbush5.mongodb.net/BuzzBlog?retryWrites=true&w=majority&appName=BuzzBlog")
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000,'0.0.0.0', () => {
  console.log("Server is running on port 3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
