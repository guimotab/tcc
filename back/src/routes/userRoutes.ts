import express from "express";
import UserController from "../controller/UserController";

const userRoutes = express.Router()
userRoutes
    //coloca do caminho mais específico pro menos específico
    .get("/user/:id", UserController.get)

export default userRoutes