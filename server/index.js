import 'dotenv/config' // This line of code must always be first 
import './db/connection.js'
import express from "express";
import morgan from "morgan";
import postRouter from './routes/posts.js'
import userRouter from './routes/users.js'

const app = express()
const PORT = process.env.PORT || 8080


app.use(express.json())
app.use(morgan('dev'))

app.use('/api/post/', postRouter)
app.use('/api/user/', userRouter)

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
})