module.exports.config = {
    name: "toại",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "NTKhang",
    description: "random ảnh Diễn Kiều xinh yêu bé Ánh Xinh Đẹp",
    commandCategory: "media",
    usages: "toại",
    cooldowns: 5
  };
  
  module.exports.run = async ({ event, api }) => {
    const axios = require("axios");
    const fs = require("fs-extra");
    
    const listlink = [
      {
        link: "https://imgur.com/HWv0L32.jpg",
        text: "Toại đừng buồn nữa"
      },
      { 
        link: "https://imgur.com/nFmboZq.jpg", 
        text : "Toại đừng buồn nữa"
      },
      { 
        link: "https://imgur.com/IjLl42B.jpg", 
        text : "Toại đừng buồn nữa"
      },
      {
        link: "https://imgur.com/mDsQBOF.jpg",
        text: "Toại đừng buồn nữa"
      },
      { 
        link: "https://imgur.com/qkqtYJi.jpg", 
        text : "Toại đừng buồn nữa"
      },
      { 
        link: "https://imgur.com/d61IbAh.jpg", 
        text : "Toại đừng buồn nữa"
      },
      {
        link: "https://imgur.com/C2S2t8F.jpg",
        text: "Toại đừng buồn nữa"
      },
      { 
        link: "https://imgur.com/rkrc3Um.jpg", 
        text : "Toại đừng buồn nữa"
      },
      {
        link: "https://imgur.com/8clZ5Tc.jpg",
        text: "Toại đừng buồn nữa"
      },
      { 
        link: "https://imgur.com/kV063Bp.jpg", 
        text : "Toại đừng buồn nữa"
      },
      { 
        link: "https://imgur.com/AOLzi6m.jpg", 
        text : "Toại đừng buồn nữa"
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