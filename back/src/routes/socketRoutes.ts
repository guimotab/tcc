import express from "express";
import AuthController from "../controller/AuthController";
import SocketController from "../controller/SocketController";

const socketRoutes = express.Router()
socketRoutes
    //coloca do caminho mais específico pro menos específico
    .get("/socket", SocketController.start)

export default socketRoutes