require('dotenv').config()

const env = {
  port: process.env.PORT,
  telegram: {
    token: process.env.TELEGRAM_TOKEN,
    logChatId: process.env.TELEGRAM_LOG_CHAT_ID
  },
  log: {
    apiURL: process.env.LOG_API_URL,
    apiKey: process.env.LOG_API_KEY
  }
}

module.exports = env
