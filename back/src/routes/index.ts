import express, { Application } from 'express'
import authRoutes from './authRoutes'
import socketRoutes from './socketRoutes'
import userRoutes from './userRoutes'
import invitesRoutes from './invitesRoutes'
import groupRoutes from './groupRoutes'
import emailRoutes from './emailRoutes'

const routes = (app: Application) => { 
    app.get('/', (req, res) => {
        res.status(200).json("Bem-vindo à nossa API!")
    })
    app.use(
        express.json(),
        //busca caminhos
        authRoutes,
        socketRoutes,
        emailRoutes,
        userRoutes,
        groupRoutes,
        invitesRoutes,
    )
}
export default routes
