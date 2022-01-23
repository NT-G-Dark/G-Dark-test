module.exports.config = {
    name: "linh",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "NTKhang",
    description: "random ảnh Diễn Kiều xinh yêu bé Ánh Xinh Đẹp",
    commandCategory: "media",
    usages: "linh",
    cooldowns: 5
  };
  
  module.exports.run = async ({ event, api }) => {
    const axios = require("axios");
    const fs = require("fs-extra");
    
    const listlink = [
      {
        link: "https://imgur.com/PJDO4Yq.jpg",
        text: "Linh Xinh Đẹp :3"
      },
      { 
        link: "https://imgur.com/o9Nr2P0.jpg", 
        text : "Linh Xinh Đẹp :3"
      },
      { 
        link: "https://imgur.com/3vrfFLF.jpg", 
        text : "Linh Xinh Đẹp :3"
      },
      {
        link: "https://imgur.com/JiT6HLd.jpg",
        text: "Linh Xinh Đẹp :3"
      },
      { 
        link: "https://imgur.com/VjhqZlq.jpg", 
        text : "Linh Xinh Đẹp :3"
      },
      { 
        link: "https://imgur.com/QJ60gTZ.jpg", 
        text : "Linh Xinh Đẹp :3"
      }
    ];
    
    const content = listlink[Math.floor(Math.random() * listlink.length)];
    
    const path = __dirname + "/cache/girl.jpg";
    const getimg = (await axios.get(content.link, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(path, Buffer.from(getimg, "utf-8"));
    return api.sendMessage({ body: content.text, attachment: fs.createReadStream(path)}, event.threadID, () => {
      fs.unlinkSync(path);
      }, event.messageID);
  };