Gladys-telegram
=======================

This module allows you to speak with Gladys on your phone with the [Telegram App](https://telegram.org/).


## Requirements

- You need Gladys >= 3.5.
- Your Gladys instance should be exposed to the internet, and be accessible threw HTTPS. (You can activate SSL in Gladys using the enable-ssl.sh script on Gladys Raspbian image) because Telegram is going to contact your Gladys instance using a webhook. If you want to test this module without having all that, I recommend [ngrok](https://ngrok.com/), it's a program that gives you a temporary HTTPS url accessible from the outside that routes request to your localhost.

## Setup

- Create a bot on Telegram by talking to the [@botfather](https://telegram.me/BotFather). Say "/start" to the
botfather to know what to do.
- Create a bot using the "/newbot" command in the @botfather conversation. Keep the API_KEY he gave you.
- Install the gladys-telegram module in Gladys. Do not reboot for the moment !
- Reboot Gladys
- In your Gladys dashboard go to "Parameters" => "Parameters". Complete the following parameters with your datas : `TELEGRAM_API_KEY` => your Telegram API key.
- Reboot Gladys
- Open Gladys logs (`pm2 logs gladys` on a Raspberry Pi via SSH)
- Talk to the bot you created.
- On logs, you should see :
debug: Telegram : Received message on chat ID = XXXXXXXXX, from = "Pierre-Gilles Leymarie" with content = "Hey !"
- Copy the chat ID to user parameter `TELEGRAM_CHAT_ID`. If the parameter does not exist, create it as a user parameter. This will help Gladys know that this Telegram conversation is your user in Gladys, and that to contact you she will need to talk in this conversation (to speak in both way).
- You can know talk to Gladys !
