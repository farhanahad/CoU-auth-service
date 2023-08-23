/* eslint-disable no-undef */
/* eslint-disable no-console */
import cors from 'cors'
import express, { Application, Request, Response } from 'express'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// console.log(app.get('env'))
// console.log(process.env)
//Testing
app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully')
})

export default app
