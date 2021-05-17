import dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';

dotenv.config();
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const {
    chat: { id },
  } = msg;

  if (msg.from.first_name.toLowerCase() !== "eugene") {
    let random = Math.floor(Math.random() * 100);
    if (random <= 30) {
      bot.sendMessage(id, msg.from.first_name + " krab");
    } 
  } else {
    bot.sendMessage(id, msg.from.first_name + " krab");
  }
});
