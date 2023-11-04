import express, { Router } from "express";
import { getPosts, createPosts } from "../controllers/posts.js";


const router=express.Router();

router.get('/',getPosts )
router.post('/',createPosts )  








// router.get('/',getPosts )
// router.get('/',getPosts )
// router.get('/',getPosts )
// router.get('/',getPosts )



export default router;