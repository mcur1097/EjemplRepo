import express  from 'express';
import cors from 'cors'

import userRouter from './routers/UserRouter'

const app = express()
.use(cors())
.use(express.json());

app.use('/api', userRouter)

export default app;