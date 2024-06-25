const express = require('express')
const { env } = require('./config')

const app = express()

app.all('*', (req, res) => res.send({ code: 404, message: 'Not found' }))

app.listen(env.port, () => {
  console.log(`Server is running on port ${env.port}`)
})
