import { Router } from "express";
import UserController from "../controller/register";

const router = Router();

router.post('/register', UserController.RegisterUser);

export default router;