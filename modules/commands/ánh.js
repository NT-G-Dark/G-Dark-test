module.exports.config = {
    name: "ánh",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "NTKhang",
    description: "random ảnh Diễn Kiều xinh yêu bé Ánh Xinh Đẹp",
    commandCategory: "media",
    usages: "ánh",
    cooldowns: 5
  };
  
  module.exports.run = async ({ event, api }) => {
    const axios = require("axios");
    const fs = require("fs-extra");
    
    const listlink = [
      {
        link: "https://imgur.com/P5s8hh3.jpg",
        text: "Bầu trời xanh, làn mây trắng. Ánh yêu nắng hay yêu Kiều?"
      },
      { 
        link: "https://imgur.com/M8BLzlJ.jpg", 
        text : "Nhờ có nắng Kiều mới thấy cầu vồng. Nhờ có Mưa Kiều mới thấy được mây. Nhờ có Ánh Kiều Mới Thấy Được Màu Hồng Của Hành Phúc. Kiều Yêu Bé Ánh."
      },
      { 
        link: "https://imgur.com/W1JaAW9.jpg", 
        text : "Giữa cuộc đời hàng ngàn cám dỗ.Ánh chỉ cần bến đỗ Kiều thôi."
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