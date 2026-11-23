import "dotenv/config";
import express from 'express'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js';

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/users", userRoutes)

const PORT = process.env["PORT"]

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})