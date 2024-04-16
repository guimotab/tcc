import express from "express";
import GroupController from "../controller/GroupController";

const groupRoutes = express.Router()
groupRoutes
    //coloca do caminho mais específico pro menos específico
    .get("/group/:id", )
    .post("/group", GroupController.create)
    .delete("/group/:id", GroupController.delete)

export default groupRoutes