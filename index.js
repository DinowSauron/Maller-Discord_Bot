const Discord = require("discord.js");

const bot = new Discord.Client();

/* Esconde isso */
const token = "Nzg0ODMyNTk4NTcyMTM4NTM2.X8vCUA.KBnndldeAYLaNjjJlzSo2zbA5OY";

bot.login(token);
bot.on("ready", () => {
    console.log("Estou pronto!")
})

bot.on("message", (msg) => {
    if(msg.content == "boas"){
        msg.reply("Olá meu amigo!");
    }
})