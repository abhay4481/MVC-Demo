import express from "express";
import { addNewUser, getAllUsers } from "../controllers/user.js";

const router = express.Router();

router.get("/users/all", getAllUsers);

router.post("/users/new", addNewUser);

export default router;
