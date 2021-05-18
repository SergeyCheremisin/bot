import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";

dotenv.config();
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const animals = ["krab", "salmon", "shell", "seal", "octopus"];

const possibility = (percent) => Math.floor(Math.random() * 100) <= percent;

bot.on("message", (msg) => {
  const {
    chat: { id },
  } = msg;

  const randomIndexWithoutKrab = Math.floor(1 + Math.random() * 4);
  const isNameEugene = msg.from.first_name.toLowerCase() === "eugene";
  const callMessage = (animal) => {
    bot.sendMessage(id, msg.from.first_name + " " + animal);
  };

  if (!isNameEugene && possibility(30)) {
    callMessage(possibility(50) ? animals[0] : animals[randomIndexWithoutKrab]);
  }
  if (isNameEugene) {
    callMessage(animals[0]);
  }
});
