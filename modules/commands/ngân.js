module.exports.config = {
    name: "ngân",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "NTKhang",
    description: "random ảnh girl xinh Bích Ngân Xinh Đẹp",
    commandCategory: "media",
    usages: "ngân",
    cooldowns: 5
  };
  
  module.exports.run = async ({ event, api }) => {
    const axios = require("axios");
    const fs = require("fs-extra");
    
    const listlink = [
      {
        link: "https://imgur.com/8jZi23V.jpg",
        text: "Nghe nói anh thích màu nho? à thì ra là anh muốn mò nhau"
      },
      { 
        link: "https://imgur.com/y28oW9A.jpg", 
        text : "Em có thể cười một xíu không? Cà phê của anh quên cho đường rồi"
      },
      { 
        link: "https://imgur.com/Nxz7weU.jpg", 
        text : "Cậu có biết cậu khác những vì sao ở điểm nào không? Sao ở trên trời, cậu ở trong tim tớ."
      },
      { 
        link: "https://imgur.com/eJ3RVTH.jpg", 
        text : "Em có một siêu năng lực đó là siêu thích anh~ Cho dù anh là vàng trắng hay xanh đen, trong mắt em đều chỉ có anh."
      },
      { 
        link: "https://imgur.com/yyDOtLK.jpg", 
        text : "Có một đốm lửa nhỏ. Thắp lên hạnh phúc to.Em đã có ai ngỏ. Hay là để anh lo"
      },
      { 
        link: "https://imgur.com/MNth1kg.jpg", 
        text : "Em yêu bầu trời xanh, yêu cả cánh hoa hồng.Nhưng không quên một thứ, đó chính là yêu anh"
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