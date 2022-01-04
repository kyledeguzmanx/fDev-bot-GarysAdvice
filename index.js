const Discord = require("discord.js");
const fetch = require("node-fetch");
const client = new Discord.Client({intents: ["GUILDS","GUILD_MESSAGES"]});
const keep_alive = require('./keep_alive.js')

const apiURL = "https://api.adviceslip.com/advice";
let message;

client.on("ready",() => {
  console.log(`Logged in as ${client.user.tag}!`)
});


client.on("message", msg => {
  if(msg.content === "/advice"){
    getQuote().then(quote => {
      msg.reply(quote)
    })
  }
});

client.login(process.env.TOKEN);


function getQuote(){
  return fetch(apiURL)
  .then (data => {
    return data.json();
  })
  .then( data => {
    return data.slip.advice;
  })
}
