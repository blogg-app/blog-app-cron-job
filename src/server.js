const express = require('express')
const cron = require('node-cron')

const { env } = require('./config')
const { logsService } = require('./services')

const app = express()

cron.schedule('*/5 * * * *', logsService.sendLogs, {
  scheduled: true,
  timezone: 'Asia/Ho_Chi_Minh'
})

app.all('*', (req, res) => res.send({ code: 404, message: 'Not found' }))

app.listen(env.port, () => {
  console.log(`Server is running on port ${env.port}`)
})
