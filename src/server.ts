import * as express from 'express'
import * as cors from 'cors'
import { Handler as UserHandler } from './User/Handler'
import { Handler } from './App/Handler';

const application = express()

application.use(express.json())
application.use(express.urlencoded({extended: false}))
application.use(cors())

application.get('/user', (new UserHandler()).get)
application.get('/user/:id', (new UserHandler()).get)
application.post('/user', (new UserHandler()).post)
application.patch('/user/:id', (new UserHandler()).patch)
application.delete('/user/:id', (new UserHandler()).delete)

application.use((new Handler()).error)

application.set('port', process.env.APP_PORT || 3007)

application.listen(application.get('port'), () => {
  console.log('App is running at http://localhost:%d in %s mode', application.get('port'), application.get('env'))
})