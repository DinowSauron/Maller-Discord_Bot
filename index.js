const Discord = require("discord.js");
const fs = require('fs');
const bot = new Discord.Client();


/* Esconde isso */
const token = process.env.token;

bot.login(token);
bot.on("ready", () => {
    console.log("Estou pronto!")
})

bot.on("message", (msg) => {
    if(msg.content == "boas"){
        msg.reply("Olá meu amigo!");
        console.log("Alguma resposta")
    }
})

/* Instruções
heroku login > loga na heroku
git init > inicia o repositorio
heroku git: bot-app-name > inicia o bot na heroku
git add . > envia os arquivos
git commit -am "" > comita o codigo
git push heroku main > envia o bot pra heroku
*/