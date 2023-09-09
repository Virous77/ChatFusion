import express from "express";
import { createUser } from "../controllers/userController.js";
import { UserValidate } from "../middleware/validate.js";

const router = express.Router();

router.post("/user", UserValidate, createUser);

export default router;
