import express from "express";
import AuthController from "../controller/AuthController";

const authRoutes = express.Router()
authRoutes
    //coloca do caminho mais específico pro menos específico
    .post("/auth", AuthController.sign)
    .post("/auth/login/", AuthController.login) 

export default authRoutes