import express from "express";
import EmailController from "../controller/EmailController";

const emailRoutes = express.Router()
emailRoutes
    //coloca do caminho mais específico pro menos específico
    .post("/email", EmailController.inviteToGroup) 

export default emailRoutes