const Discord = require("discord.js");
const fs = require('fs');
const bot = new Discord.Client();

/* Esconde isso */
const token = require('./token.json');

bot.login(token["key"]);
bot.on("ready", () => {
    console.log("Estou pronto!")
})

bot.on("message", (msg) => {
    if(msg.content == "boas"){
        msg.reply("Olá meu amigo!");
    }
})