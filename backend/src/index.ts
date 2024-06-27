import express from 'express'
const app = express()
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())

app.get('/',async(req,res)=>{

    const data = await prisma.todo.findMany()

    res.json({
        msg: 'done motherfucker',
        data: data
    })
})

app.listen(3000)
