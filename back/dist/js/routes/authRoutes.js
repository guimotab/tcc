import express from "express";
import AuthController from "../controller/AuthController";
const authRoutes = express.Router();
authRoutes
    .post("/auth", AuthController.sign)
    .get("/auth/:email/:password", AuthController.login);
export default authRoutes;
//# sourceMappingURL=authRoutes.js.map