import express from "express";
import InvitesController from "../controller/InvitesController";

const invitesRoutes = express.Router()
invitesRoutes
    //coloca do caminho mais específico pro menos específico
    .get("/invites/:id", InvitesController.get)

export default invitesRoutes