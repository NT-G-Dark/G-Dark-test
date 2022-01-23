module.exports.config = {
    name: "chaoluoi",
    version: "1.0.0", 
    hasPermssion: 0,
    credits: "Phạm Minh Duy",
    description: "Cháo Lưỡi",
    commandCategory: "Game", 
    usages: "@tag người cần cháo lưỡi", 
    cooldowns: 0,
    dependencies: [] 
  };
  module.exports.run = async function({ api, event, args, Users, Threads, Currencies }) {
          const axios = global.nodemodule["axios"];
          const fs = global.nodemodule["fs-extra"];
  var mention = Object.keys(event.mentions)[0];
  const na = await Users.getNameUser(mention);
  let getdata = (await axios.get(`https://imgur.com/o8pyo5l.gif`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync( __dirname + '/cache/phongvan.jpg', Buffer.from(getdata, 'utf-8'));
  api.sendMessage({body: `ỏ lưỡi em thật ngọt thật sướng khi dc nút lưỡi của con vợ ${na} babi à nước miếng em thật ngọt` , mentions: [{id: mention, tag: na }],  attachment: fs.createReadStream( __dirname + '/cache/phongvan.jpg')},event.threadID,event.messageID)
  };