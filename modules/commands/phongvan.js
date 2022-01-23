module.exports.config = {
    name: "phongvan",
    version: "1.0.0", 
    hasPermssion: 0,
    credits: "Phạm Minh Duy",
    description: "Phỏng Vấn",
    commandCategory: "Game", 
    usages: "@tag người cần phỏng vấn", 
    cooldowns: 0,
    dependencies: [] 
  };
  module.exports.run = async function({ api, event, args, Users, Threads, Currencies }) {
          const axios = global.nodemodule["axios"];
          const fs = global.nodemodule["fs-extra"];
  var mention = Object.keys(event.mentions)[0];
  const na = await Users.getNameUser(mention);
  let getdata = (await axios.get(`https://imgur.com/Zkl0RoA.jpg`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync( __dirname + '/cache/phongvan.jpg', Buffer.from(getdata, 'utf-8'));
  api.sendMessage({body: `À bạn hãy cho tôi biết và hãy nêu cảm nghĩ của bạn :V ${na}` , mentions: [{id: mention, tag: na }],  attachment: fs.createReadStream( __dirname + '/cache/phongvan.jpg')},event.threadID,event.messageID)
  };