import express from "express";
import MessageController from "../controller/MessageController";

const messagesRoutes = express.Router()
messagesRoutes
    //coloca do caminho mais específico pro menos específico
    .get("/messages/all/:chatId/:skip/:take", MessageController.getAllMessagesByChatIdLimited)
    .get("/messages/all/:chatId", MessageController.getAllMessagesByChatId)

export default messagesRoutes