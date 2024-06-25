const TelegramBot = require('node-telegram-bot-api')

const { env } = require('../config')
const currentTime = require('../utils/getTime')

const bot = new TelegramBot(env.telegram.token, { polling: true })

const sendMessage = async (message, chatId) => {
  if (!message || !chatId) {
    console.error(`${currentTime()} - Message or chatId is missing.`)
    return
  }

  try {
    await bot.sendMessage(chatId, `${currentTime()} - ${message}`)
  } catch (error) {
    console.error(`${currentTime()} - Error sending message: ${error.message}`)
  }
}

module.exports = {
  sendMessage
}
