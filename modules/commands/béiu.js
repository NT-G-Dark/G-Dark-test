module.exports.config = {
  name: "béiu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NTKhang",
  description: "random ảnh girl xinh Ngọc Anh",
  commandCategory: "media",
  usages: "béiu",
  cooldowns: 5
};

module.exports.run = async ({ event, api }) => {
  const axios = require("axios");
  const fs = require("fs-extra");
  
  const listlink = [
    {
      link: "https://i.imgur.com/5xLH7Ks.jpg",
      text: "Nghe nói anh thích màu nho? à thì ra là anh muốn mò nhau"
    },
    { 
      link: "https://imgur.com/SaEIggq.jpg", 
      text : "Em có thể cười một xíu không? Cà phê của anh quên cho đường rồi"
    },
    { 
      link: "https://imgur.com/2YBw0pz.jpg", 
      text : "Cậu có biết cậu khác những vì sao ở điểm nào không? Sao ở trên trời, cậu ở trong tim tớ."
    },
    { 
      link: "https://imgur.com/T1bSvqZ.jpg", 
      text : "Em có một siêu năng lực đó là siêu thích anh~ Cho dù anh là vàng trắng hay xanh đen, trong mắt em đều chỉ có anh."
    },
    { 
      link: "https://imgur.com/Lq3AsH4.jpg", 
      text : "Có một đốm lửa nhỏ. Thắp lên hạnh phúc to.Em đã có ai ngỏ. Hay là để anh lo"
    },
    { 
      link: "https://imgur.com/kxvl7f5.jpg", 
      text : "Em yêu bầu trời xanh, yêu cả cánh hoa hồng.Nhưng không quên một thứ, đó chính là yêu anh"
    },
    { 
      link: "https://imgur.com/MSza0TL.jpg", 
      text : "Chim thường yêu trời, con nít thường yêu kem.Anh thì rất yêu đời, và cũng rất yêu em"
    },
    { 
      link: "https://imgur.com/gT6flpZ.jpg", 
      text : "Xiêu lòng ánh mắt. Xong liều yêu anh"
    },
    { 
      link: "https://imgur.com/GPsNIk7.jpg", 
      text : "Bao năm phê đá phê cần, không bằng một phút ngồi gần phê anh"
    },
    { 
      link: "https://imgur.com/Azb0CV9.jpg", 
      text : "Thay vì tặng anh một đóa hồng không héo, để em gửi anh một mối tình không phai!"
    },
    { 
      link: "https://imgur.com/ujyjDDj.jpg", 
      text : "Họ thích nghe nhạc vì lời. Còn em lại thích trọn đời có anh."
    },
    { 
      link: "https://imgur.com/xZfgCf0.jpg", 
      text : "Con cóc là cậu ông trời. Còn anh là cả cuộc đời của em."
    },
    { 
      link: "https://imgur.com/LhM1t3s.jpg", 
      text : "Anh ơi gió lạnh gần kề. Anh mau thu xếp mà về với em."
    },
    { 
      link: "https://imgur.com/xeMzBxw.jpg", 
      text : "Mọi người thì thích trà sữa. Còn em thì thích trà trộn vào tim anh."
    },
    { 
      link: "https://imgur.com/H6MypWz.jpg", 
      text : "Thời tiết này yêu em là hợp lý. Anh mà bỏ phí thì là anh ngu."
    },
    { 
      link: "https://imgur.com/UIDtsBj.jpg", 
      text : "Muốn cho thiên hạ trầm trồ. Sao anh không thử làm bồ của em."
    },
    { 
      link: "https://imgur.com/fqQvbRF.jpg", 
      text : "Cậu cận thị à?, nếu không cận, thì sao cậu lại không nhìn ra tớ thích cậu chứ?"
    },
    { 
      link: "https://imgur.com/fAYvEEF.jpg", 
      text : "Cậu giống như Google vậy, bởi cậu là tất cả những gì tớ tìm kiếm"
    },
    { 
      link: "https://imgur.com/KKs7LyA.jpg", 
      text : "Anh ơi em thích đồng hồ thích luôn cả việc làm bồ của anh."
    },
    { 
      link: "https://imgur.com/n315S1p.jpg", 
      text : "Nhân gian vốn lắm bộn bề sao không bỏ hết rồi về bên nhau."
    },
    { 
      link: "https://imgur.com/HuA9Shi.jpg", 
      text : "Màu anh thích là màu xanh dương, còn em mãi là người anh thương."
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