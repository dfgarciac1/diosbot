const { Client, Attachment,MessageEmbed } = require('discord.js');

const fetch = require('node-fetch');
const client = new Client();
const util = require('minecraft-server-util');
const dotenv = require('dotenv');
const PREFIX = '!';



var images = ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.jefsescritor.com%2Fjojos-bizarre-adventure%2F&psig=AOvVaw2DK8RAEgUlljJb4xeW7XPx&ust=1606707454923000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDlmuvppu0CFQAAAAAdAAAAABAJ", 
"https://www.google.com/url?sa=i&url=https%3A%2F%2Frpp.pe%2Fcultura%2Fasiapop%2Fnetflix-la-primera-temporada-de-jojos-bizarre-adventure-aterrizara-en-la-plataforma-noticia-1183503&psig=AOvVaw2DK8RAEgUlljJb4xeW7XPx&ust=1606707454923000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDlmuvppu0CFQAAAAAdAAAAABAO", 

];
var image = Math.floor(Math.random() * images.length);


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
    console.log(msg.content)
    const querystring = require('querystring');
    if (msg.content === 'ping') {
        msg.reply('pong')
    }

      if (msg.content !== "Jojo") return;
        try {
          const results = await googleImages.search("Jojos");
          const reply = !results.length ?
            "No results" :
            new Attachment(results[Math.floor(Math.random() * results.length)].url);
          msg.channel.send(reply);
        }
        catch (e) {
          console.error(e);
          msg.channel.send("Error happened, see the console");
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
    if (msg.content === 'cat') {
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());

	    msg.channel.send(file);
    }
  
    if (msg.content === 'Java') {
        const { file } = await fetch().then(response => response.json());

	    msg.channel.send(file);
    }
    
    if (msg.content === 'pong') {
        msg.reply('ping')
    }
    if (msg.content === 'Homero') {
        msg.reply('https://media.giphy.com/media/W79wfYWCTWidO/giphy.gif')
    }
    if (msg.content === 'Jojos') {
    number = 2;
    imageNumber = Math.floor (Math.random() * number) + 1;
    msg.channel.send ({files: ["./jojos/" + imageNumber + ".jpg"]})
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


const token = 'Nzc2NTE4ODk5MDI1OTY5MjA0.X62DlA.e_amPyxQ9GGpgBZfdixQWs4rlQ8';
client.login(token);