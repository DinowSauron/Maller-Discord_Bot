const Discord = require("discord.js");
const fs = require('fs');
const db = require("./db.json");
const client = new Discord.Client();

const token = process.env.token || require('./key.json').key;

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;

express()
.use(express.static(path.join(__dirname, "public")))
.set("views", path.join(__dirname, "views"))
.set("view engine", "ejs")
.get("/", (req, res) => res.render("pages/index"))
.listen(PORT, () => console.log(`Listening on ${ PORT }`))


client.login(token);

client.on("ready", () => {
    console.log(`Bot foi iniciado! com um total de  ${client.users.cache.size} usuários, em ${client.guilds.cache.size} servidores.`);
    client.user.setActivity(`Estou em ${client.guilds.cache.size} Servidores!`);
})

client.on("guildCreate", guild => {
    console.log(`O Bot entrou no servidor: ${guild.name} (id: ${guild.id}) (pop: ${guild.memberCount}).`);
    client.user.setActivity(`Estou em ${client.guilds.cache.size} Servidores!`);
})

client.on("guildDelete", guild => {
    console.log(`O Bot saiu do servidor: ${guild.name} (id: ${guild.id}) (pop: ${guild.memberCount}).`);
    client.user.setActivity(`Estou em ${client.guilds.cache.size} Servidores!`);
})




client.on("message", (msg) => {

    if(msg.content.indexOf(".mall") == 0)
        console.log(`chamada de <${msg.author.username}(${msg.author.discriminator})> as: ${new Date().toUTCString()} > (${msg.content})`);

    if(msg.content == ".mall"){
        msg.reply(`Olá, me parece que você precisa de ajuda...
.mall see
        `);
    }

    if(msg.content == ".mall see"){
        message = "";
        db.selling.forEach(obj => {
            var objPrice = obj.price;
            if(objPrice.indexOf(",") == -1){
                objPrice += ",00"
            }
            while(objPrice.length < db.leng){
                objPrice = " " + objPrice;
            }

            message += `
\`R$: ${objPrice} >\` **${obj.item}**`
        });
        msg.reply(`Verifique Nossa Disponibilidade!${message}`);
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