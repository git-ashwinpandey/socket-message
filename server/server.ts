// server.ts (in root folder)
import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()
const port = 3030

nextApp.prepare().then(() => {
  const app = express()
  const server = createServer(app)
  const io = new Server(server)

  io.on('connection', (socket) => {
    console.log('Client connected')

    socket.on('send-message', (message) => {
      io.emit('receive-message', message)
    })

    socket.on('disconnect', () => {
      console.log('Client disconnected')
    })
  })

  app.all('*', (req, res) => {
    return nextHandler(req, res)
  })

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})