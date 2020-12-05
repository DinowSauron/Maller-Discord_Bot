const Discord = require("discord.js");
const fs = require('fs');
const bot = new Discord.Client();

const token = process.env.token;

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;

express()
.use(express.static(path.join(__dirname, "public")))
.set("views" path.join(__dirname, "views"))
.set("view engine", "ejs")
.get("/", (req, res) => res.render("pages/index"))
.listen(PORT, () => console.log(`Listening on ${ PORT }`))


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

heroku ps:restart web.1 >reinicia o servidor
*/