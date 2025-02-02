import { Router } from "express";
import { addpost, deletepost, getpost, updatepost } from "./post.controler.js";

const router=Router()

router.post("/",addpost);

router.get("/",getpost);

router.patch("/",updatepost);

router.delete("/:id",deletepost);


export default router