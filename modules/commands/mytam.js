module.exports.config = {
    name: "mytam",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "NTKhang",
    description: "random ảnh girl xinh mỹ tâm Xinh Đẹp",
    commandCategory: "media",
    usages: "mytam",
    cooldowns: 5
  };
  
  module.exports.run = async ({ event, api }) => {
    const axios = require("axios");
    const fs = require("fs-extra");
    
    const listlink = [
      {
        link: "https://imgur.com/JSfYP9Y.jpg",
        text: "Nghe nói anh thích màu nho? à thì ra là anh muốn mò nhau"
      },
      { 
        link: "https://imgur.com/OTklSWv.jpg", 
        text : "Em có thể cười một xíu không? Cà phê của anh quên cho đường rồi"
      },
      { 
        link: "https://imgur.com/pxLkbYk.jpg", 
        text : "Cậu có biết cậu khác những vì sao ở điểm nào không? Sao ở trên trời, cậu ở trong tim tớ."
      },
      { 
        link: "https://imgur.com/CujshM6.jpg", 
        text : "Em có một siêu năng lực đó là siêu thích anh~ Cho dù anh là vàng trắng hay xanh đen, trong mắt em đều chỉ có anh."
      },
      { 
        link: "https://imgur.com/AYLDOj4.jpg", 
        text : "Có một đốm lửa nhỏ. Thắp lên hạnh phúc to.Em đã có ai ngỏ. Hay là để anh lo"
      },
      { 
        link: "https://imgur.com/bpdMXDk.jpg", 
        text : "Em yêu bầu trời xanh, yêu cả cánh hoa hồng.Nhưng không quên một thứ, đó chính là yêu anh"
      },
      { 
        link: "https://imgur.com/rw0hosU.jpg", 
        text : "Chim thường yêu trời, con nít thường yêu kem.Anh thì rất yêu đời, và cũng rất yêu em"
      },
      { 
        link: "https://imgur.com/rw0hosU.jpg", 
        text : "Xiêu lòng ánh mắt. Xong liều yêu anh"
      },
      { 
        link: "https://imgur.com/ZaxBA1u.jpg", 
        text : "Bao năm phê đá phê cần, không bằng một phút ngồi gần phê anh"
      },
      { 
        link: "https://imgur.com/6iJhWoz.jpg", 
        text : "Thay vì tặng anh một đóa hồng không héo, để em gửi anh một mối tình không phai!"
      },
      { 
        link: "https://imgur.com/gdaKkxL.jpg", 
        text : "Họ thích nghe nhạc vì lời. Còn em lại thích trọn đời có anh."
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