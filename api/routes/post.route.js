import express from "express";
const router = express.Router();
import { verifyToken } from "../utils/verifyUser.js"
import { create, getPosts, deletePost, updatePost } from "../controllers/post.controller.js";


router.post("/create", verifyToken, create);
router.get("/getposts", getPosts);
router.delete("/deletepost/:postId/:userId", verifyToken, deletePost);
router.put("/updatepost/:postId/:userId", verifyToken, updatePost);



export default router;