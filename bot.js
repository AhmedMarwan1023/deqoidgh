client.on('ready',async () => {//Toxic Codes
console.log("Starting..");//Toxic Codes
let g = client.guilds.get("647841879827677208"); // id server
let c = g.channels.get("647843262333452319");// id channel
if(c.type === 'voice') {//Toxic Codes
c.join();//Toxic Codes
setInterval(() => {//Toxic Codes
if(!g.me.voiceChannel) c.join();
}, 1);//Toxic Codes
} else {//Toxic Codes
console.log('Failed To Join: \n The Channel Type isn "Listening."')
}
});


client.login(process.env.BOT_TOKEN);
