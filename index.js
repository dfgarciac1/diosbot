const { Client, Attachment,MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

const prefix='!';
const { instagrapi } = require('instagrapi');
const querystring = require('querystring');
const config = require("./config.json");
const fetch = require('node-fetch');
const client = new Client();
const util = require('minecraft-server-util');
const dotenv = require('dotenv');
const PREFIX = '!';
const axios  = require('axios');
const { error, profile, profileEnd } = require('console');
client.login("Nzk3OTYyOTg1NDQ0MzQzODE5.X_uG8Q.DwDEm2U5FIVDnkpho4a1MaHOF0Y");


var images = ["https://elcomercio.pe/resizer/n0mvBdW0-ja0HE3oWwcp7yc5Xf4=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/MFDH5VS7RNBKTIY64OQTYTPMQM.jpg",
"https://f.rpp-noticias.io/2019/02/28/393439_759441.jpg","https://www.tierragamer.com/wp-content/uploads/2019/08/jojos-bizarre-adventure-eyes-of-heaven-el-juego-para-esperar-la-nueva-temporada-450x300.jpg"]; 


var image = Math.floor(Math.random()*2);


function Pagina(){
 let primero = ["https://cat-bounce.com/","https://es.eurobilltracker.com/welcome/?step=3","https://worlds-highest-website.com/es/#pos1"
 ,"http://pikachize.eye-of-newt.com/","https://boards.4chan.org/b/"]
 Numero =(Math.random()* 5)
 primero[1]
 return primero
}
function Suma (){
    Numero1=Math.random()
    Numero2=Math.random()
  var suma = Numero1+Numero2
  return suma;
}



client.on('ready', () => {
    console.log('Bot Now connected!');
    console.log('Logged In as', client.user.tag)
    client.user.setStatus('dnd'); // online, idle, invisible, dnd

    console.log('Bot status: ', client.user.presence.status);


});


// Bot listenning messages
client.on('message', async msg => {
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
const command =args.shift();
    console.log(msg.content)
    const querystring = require('querystring');
    if (msg.content === 'ping') {
        msg.reply('pong')
    }
    if(msg.content==='Suma'){
       
        msg.reply( Suma())

    }
    if(msg.content==='PaginaR'){
        msg.reply(Pagina())
        
    }
    if(msg.content==='?Java'){
        msg.reply("https://docs.oracle.com/javase/7/docs/api/")
       
    }
    if(command==="Espejo"){
        let user = msg.mentions.users.first(); 
        if(!user) user = msg.author; 
        const embed = new Discord.MessageEmbed() 
        .setTitle(image) 
        .setImage(user.displayAvatarURL()) 
        .setTimestamp() 
        msg.reply(embed) 

    }
    if (command === 'urbano') {
        if (!args.length) {
          return msg.channel.send('You need to supply a search term!');
        }
      
          const query = querystring.stringify({ term: args.join(' ') });
          const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

        const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
        const [answer] = list;
        const embed = new MessageEmbed()
	.setColor('#EFFF00')
	.setTitle(answer.word)
	.setURL(answer.permalink)
	.addFields(
		{ name: 'Definition', value: trim(answer.definition, 1024) },
		{ name: 'Example', value: trim(answer.example, 1024) },
		{ name: 'Rating', value: `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.` }
	);

msg.channel.send(embed);
    }
    if (msg.content === 'Dios') {
        axios.get('https://api.github.com/users/dfgarciac1').then((res =>{
           let yo= (JSON.stringify(res.data.login))
           let yo2=(JSON.stringify(res.data.public_repos))
        const exampleEmbed = new Discord.MessageEmbed()
        .setTitle("Informacion de mi creador")
        .addFields({name:"Autor",value:yo},{name:"Github",value:"https://github.com/dfgarciac1"}
        ,{name:"Repositorios Actuales",value:yo2})
       
        msg.reply(exampleEmbed);


            
       }))
       .catch((err)=>{
           console.error("Error",err);
       });
    }
    if (command === 'Diosa') {
        let [name] = args;
        axios.get(`https://api.github.com/users/${name}/repos`).then((res =>{
            for(let i=0;i<res.data.length;i++){
                var yo =[(JSON.stringify(res.data[i].full_name))]
                let yo1= (JSON.stringify(res.data.created_at))
                let yo2=(JSON.stringify(res.data.language))
                const exampleEmbed = new Discord.MessageEmbed()
                .setTitle("Informacion del repositorio")
                .addFields({name:"Nombres Repositorio",value:yo})
               
                msg.reply(exampleEmbed);
     
    
            }
          
            
       }))
       .catch((err)=>{
           console.error("Error",err);
       });
    }
if(command==='Dinero'){
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Server Info")
    .setImage(msg.guild.iconURL)
    .setDescription(`${msg.guild}'s information`)
    .addField("Owner", `The owner of this server is ${msg.guild.owner}`)
    .addField("Member Count", `This server has ${msg.guild.memberCount} members`)
    .addField("Emoji Count", `This server has ${msg.guild.emojis.cache.size} emojis`)
    .addField("Roles Count", `This server has ${msg.guild.roles.cache.size} roles`)
    

msg.channel.send(embed)
  };
 
    if (command=== 'Repo') {
        let [name] = args;
        axios.get(`https://api.github.com/users/${name}`).then((res =>{
           let yo= (JSON.stringify(res.data.login))
           let yo2=(JSON.stringify(res.data.public_repos))
           let yo3=(JSON.stringify(res.data.avatar_url))
           let yo4=(JSON.stringify(res.data.created_at))
           let yo5=(JSON.stringify(res.data.updated_at))
        const exampleEmbed = new Discord.MessageEmbed()

        .setTitle("Informacion del repositorio")
        .addFields({name:"La jeta",value:yo3},{name:"Autor",value:yo},{name:"Github",value:`https://github.com/${name}`}
        ,{name:"Repositorios Actuales",value:yo2},
        {name:"Fecha de creacion",value:yo4},
        {name:"Fecha de ultimo archivo subido",value:yo5})
       
        msg.reply(exampleEmbed);


            
       }))
       .catch((err)=>{
           console.error("Error",err);
       });
    }
    if (command=== "asl") {
        let [age, sex, location] = args;
        msg.reply(`Hello ${msg.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
      }
    if (msg.content === 'cat') {
        const { file} = await
 fetch('https://aws.random.cat/meow').then(response => response.json());

	    msg.channel.send(file);
    }
    if (msg.content === 'money') {
        const { file } = await fetch('https://api.github.com/users/dfgarciac1').then(response => response.json());

	    msg.channel.send(file);
    }
    if (msg.content === 'jojo') {
        let random = new MessageEmbed()
        .setTitle('Here is your random pic')
        .setAuthor('mortis')
        .setImage(String([images[image]]))
        msg.channel.send(random);
        console.log(image)
    }
    if (msg.content === 'Java') {
        const { file } = await fetch().then(response => response.json());

	    msg.channel.send(file);
    }
    if(msg.content==='Invita'){
        client.fetchInvite('https://discord.gg/ttFXH5Xsmx')
     .then(invite => msg.channel.send(`Invita al grupo con  https://discord.gg/ttFXH5Xsmx`))
   .catch(console.error);
    }
    if (msg.content === 'pong') {
        msg.reply('ping')
    }
    if (msg.content === 'Homero') {
        msg.reply('https://media.giphy.com/media/W79wfYWCTWidO/giphy.gif')
    }
   
    if (msg.content === '->JS') {
        msg.reply('https://developer.mozilla.org/es/docs/Web/JavaScript')
    }
    
   if (msg.content === 'help') {
    msg.channel.send({embed: {
       color: 3447003,
       author: {
           name: client.user.username,
           icon_url: client.user.avatarURL()
       },      
       title: "Comandos",
     description: " ->JS,?Java,PaginaR,Homero,ReactComponente,cat,hello,!test,!puto,!suicide,!JS,!pretty,React,!Hijo,Camilo,Github,Alea"

     
     }
 });
    
}

    if (msg.content === 'hello') {
        msg.channel.send(`Hello ${msg.author}`);
    }
    if (msg.content === 'Alea') {
        
        msg.channel.send( Math.random());
    }
    

    

    if (msg.content.includes('!test')) {
        msg.channel.send('Este grupo es de dioses');
    }
    if (msg.content.includes('!pretty')) {
        msg.channel.send('Eres hermoso te lo juro por diegito');
    }
    if (msg.content.includes('!JS')) {
        msg.channel.send('Viva el lenguaje ');
        
    }
    

    if (msg.content === '!puto') {
        msg.channel.send('el que no cante');
        msg.channel.send('en diciembre');
    }
    if (msg.content === '!Hijo') {
        msg.channel.send('Te quiero Papa');
        msg.channel.send('Gracias por crearme');
    }
    
    if (msg.content === '!suicide') {
        msg.channel.send('Se murio');
        msg.channel.send('El semestre');
    }
    if (msg.content === '!Server') {
         

    }
   
    if (msg.content === 'ping') {
        msg.reply('pong')
    }
    if (msg.content === 'Camilo') {
        msg.reply('Te quiero onichan Camilo')
        msg.reply('Yamete')
    }
  
   if (msg.content === 'Github') {
     msg.channel.send({embed: {
        color: 3447003,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },      
        title: "GitHub De un Dios",
      url: "https://github.com/dfgarciac1/React",
      description: "Este es mi github de dioses.",
      }
  });
     
}

if (msg.content === 'React') {
    msg.channel.send({embed: {
       color: 3447003,
       author: {
           name: client.user.username,
           icon_url: client.user.avatarURL()
       },      
       title: "React Principio",
       image: {
		url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
	},
     url: "https://es.reactjs.org/docs/getting-started.html",
     description: "React Inicios.",
     }
  
 });
    
}
if (msg.content === 'ReactComponente') {
    msg.channel.send({embed: {
       color: 3447003,
       author: {
           name: client.user.username,
           icon_url: client.user.avatarURL()
       },      
       title: "React Principio",
       image: {
		url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
	},
     url: "https://es.reactjs.org/docs/getting-started.html",
     description: "React Inicios.",
     }
  
 });
    
}
    
    
    // Deleting 100 messages
    if (msg.content.startsWith('!clean')) {
        async function clear() {
            try {
                // await msg.delete();
                const fetched = await msg.channel.fetchMessages({limit: 99});
                msg.channel.bulkDelete(fetched);;
                console.log('Messages deleted');
            }
            catch (e) {
                console.log(e);
            }
        }
        clear();
    }
});


