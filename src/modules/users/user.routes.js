import { Router } from "express";
import { adduser, deleteuser, getuser, updateuser } from "./user.controler.js";

const router=Router()

router.post("/",adduser);

router.get("/",getuser);

router.patch("/",updateuser);

router.delete("/:id",deleteuser);


export default router