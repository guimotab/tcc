import express, { Application } from 'express'
import authRoutes from './authRoutes'
import emailRoutes from './emailRoutes'
import userRoutes from './userRoutes'
const routes = (app: Application) => {
    app.get('/', (req, res) => {
        res.status(200).json("Bem-vindo à nossa API!")
    })
    app.use(
        express.json(),
        //busca caminhos
        authRoutes,
        emailRoutes,
        userRoutes
    )
}
export default routes
