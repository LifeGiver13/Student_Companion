import express from 'express'
import authRoute from './routes/index.js'

const app = express()


app.use(express.json())
app.use(authRoute)

export default app;
