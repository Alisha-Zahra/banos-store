import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import productRoutes from './routes/products.js'

const app = express()
app.use(helmet())
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }))
app.use(express.json({ limit: '1mb' }))

app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'bano.store API' }))
app.use('/api/products', productRoutes)
app.use((_req, res) => res.status(404).json({ message: 'Route not found' }))
app.use((err, _req, res, _next) => {
  console.error(err)
  res.status(500).json({ message: 'Something went wrong on the server' })
})

export default app
