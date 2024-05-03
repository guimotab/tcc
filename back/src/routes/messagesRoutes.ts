import express from "express";
import MessageController from "../controller/MessageController";

const messagesRoutes = express.Router()
messagesRoutes
    //coloca do caminho mais específico pro menos específico
    .get("/messages/some/:chatId/:skip/:take", MessageController.getSomeMessagesByChatId)
    .get("/messages/all/:chatId", MessageController.getAllMessagesByChatId)

export default messagesRoutes