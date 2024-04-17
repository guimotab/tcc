import express, { Application } from 'express'
import authRoutes from './authRoutes'
<<<<<<< HEAD
import socketRoutes from './socketRoutes'
=======
import emailRoutes from './emailRoutes'
import userRoutes from './userRoutes'
import invitesRoutes from './invitesRoutes'
import groupRoutes from './groupRoutes'

>>>>>>> main
const routes = (app: Application) => {
    app.get('/', (req, res) => {
        res.status(200).json("Bem-vindo à nossa API!")
    })
    app.use(
        express.json(),
        //busca caminhos
        authRoutes,
<<<<<<< HEAD
        socketRoutes
=======
        emailRoutes,
        userRoutes,
        groupRoutes,
        invitesRoutes,
>>>>>>> main
    )
}
export default routes
