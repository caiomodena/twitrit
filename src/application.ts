import * as express from 'express'
import * as cors from 'cors'
import { Handler as UserHandler } from './User/Handler'

const application = express()

application.use(express.json())
application.use(express.urlencoded({extended: false}))
application.use(cors())

application.get('/user', new UserHandler().get)
application.get('/user/:id', new UserHandler().get)
application.post('/user', new UserHandler().post)
application.patch('/user/:id', new UserHandler().patch)
application.delete('/user/:id', new UserHandler().delete)

application.set('port', process.env.APP_PORT || 3007)

export { application }
