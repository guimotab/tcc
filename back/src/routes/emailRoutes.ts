import express from "express";
import EmailController from "../controller/EmailController";

const groupRoutes = express.Router()
groupRoutes
    //coloca do caminho mais específico pro menos específico
    .post("/email", EmailController.inviteToGroup)

export default groupRoutes