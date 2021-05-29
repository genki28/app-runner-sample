import express from 'express'

const app = express()
const PORT = process.env.APP_PORT || 8000

app.use(express.json())
app.get('/', (req, res, next) => {
  res.send('Hello, world APP RUNNER')
})

app.listen(PORT, () => {
  console.log(`🚀Runnning http://localhost:8080`)
})