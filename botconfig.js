module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: "=", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
  Token: "NjQyOTg3NzUxNjAzNDM3NTgy.Xce7Ag.CoXAGRk4XzR0qMFhBmohN0KB470", //Discord Bot Token
  ClientID: "642987751603437582", //Discord Client ID
  ClientSecret: "zatbtYmySetlwhRxdx1zlJpFvUjYoKxl", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: "http://localhost/lisabot", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku
  
  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "Music", // The message shown
    type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

//   Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "anything as a password", 
    secure: false, // Set this to true if you're self-hosting lavalink on replit.
  },

  Lavalink1: {
    host: "replit-lavalink-csieuluoi.csieuluoi.repl.co",
    port:443 ,
    pass: "youshallnotpass",
    id: "LAVA",
    secure: true,
  },

    Lavalink2: {
        host: "de1.cubehosting.me",
        port: 3949,
        pass: "youshallnotpass",
        id: "CUBE",
        secure:false,
    },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: "c498fa8cabb74eea843662dff8756247", //Spotify Client ID
    ClientSecret: "febaac0935ca494a8208a6192107f254", //Spotify Client Secret
  },
};

