import express from 'express'
import diarieRoutes from './routes/diarie'

const app = express()

app.use(express.json())

app.use('/api/diaries', diarieRoutes)
app.get('/ping', (_req, res) => {
  return res.send('pong  hello all friend ss   ' + new Date().toLocaleDateString())
})

app.listen(3000, () => { console.log('server running on port 30000') })
