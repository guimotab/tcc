import express from 'express';
import authRoutes from './authRoutes';
const routes = (app) => {
    app.get('/', (req, res) => {
        res.status(200).json("Bem-vindo à nossa API!");
    });
    app.use(express.json(), authRoutes);
};
export default routes;
//# sourceMappingURL=index.js.map