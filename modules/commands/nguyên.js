module.exports.config = {
    name: "nguyên",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "NTKhang",
    description: "random ảnh Diễn Kiều xinh yêu bé Ánh Xinh Đẹp",
    commandCategory: "media",
    usages: "nguyên",
    cooldowns: 5
  };
  
  module.exports.run = async ({ event, api }) => {
    const axios = require("axios");
    const fs = require("fs-extra");
    
    const listlink = [
      {
        link: "https://imgur.com/UCYDBwF.jpg",
        text: "đà đà bot chúc nguyên dui dẻ :3"
      },
      { 
        link: "https://imgur.com/apSq6oj.jpg", 
        text : "đà đà bot chúc nguyên dui dẻ :3"
      },
      { 
        link: "https://imgur.com/Uvf7Fil.jpg", 
        text : "đà đà bot chúc nguyên dui dẻ :3"
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