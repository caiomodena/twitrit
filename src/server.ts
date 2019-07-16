import express from 'express'
import cors from 'cors'
import { Handler as UserHandler } from './User/Handler'
import { Handler } from './App/Handler';

const server = express()

server.use(express.json())
server.use(express.urlencoded({extended: false}))
server.use(cors())

server.get('/user', (new UserHandler()).get)
server.get('/user/:id', (new UserHandler()).get)
server.post('/user', (new UserHandler()).post)
server.patch('/user/:id', (new UserHandler()).patch)
server.delete('/user/:id', (new UserHandler()).delete)

server.get("/hello", (_, res) => { res.send("Hello node!")});

server.use((new Handler()).error)

export default server;