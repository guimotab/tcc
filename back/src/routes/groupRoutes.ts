import express from "express";
import GroupController from "../controller/GroupController";

const groupRoutes = express.Router()
groupRoutes
    //coloca do caminho mais específico pro menos específico
    .get("/group/:groupId", )
    .post("/group", GroupController.create)

export default groupRoutes