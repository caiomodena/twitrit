import * as express from 'express'
import * as cors from 'cors'
import { Handler as HelloWorldHandler } from './HelloWorld/Handler'

const application = express()

application.use(express.json())
application.use(express.urlencoded({extended: false}))
application.use(cors())

application.get('/hello-world', new HelloWorldHandler().get)

application.set('port', process.env.APP_PORT || 3007)

export { application }
