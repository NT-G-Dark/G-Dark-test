module.exports.config = {
    name: "kieuxinh",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "NTKhang",
    description: "random ảnh girl xinh Diễm Kiều Xinh Đẹp",
    commandCategory: "media",
    usages: "kieuxinh",
    cooldowns: 5
  };
  
  module.exports.run = async ({ event, api }) => {
    const axios = require("axios");
    const fs = require("fs-extra");
    
    const listlink = [
      {
        link: "https://imgur.com/M9eeShz.jpg",
        text: "Nghe nói anh thích màu nho? à thì ra là anh muốn mò nhau"
      },
      { 
        link: "https://imgur.com/YXghydq.jpg", 
        text : "Em có thể cười một xíu không? Cà phê của anh quên cho đường rồi"
      },
      { 
        link: "https://imgur.com/tsjKpVp.jpg", 
        text : "Cậu có biết cậu khác những vì sao ở điểm nào không? Sao ở trên trời, cậu ở trong tim tớ."
      },
      { 
        link: "https://imgur.com/Sg7QUpC.jpg", 
        text : "Em có một siêu năng lực đó là siêu thích anh~ Cho dù anh là vàng trắng hay xanh đen, trong mắt em đều chỉ có anh."
      },
      { 
        link: "https://imgur.com/4Koc82i.jpg", 
        text : "Có một đốm lửa nhỏ. Thắp lên hạnh phúc to.Em đã có ai ngỏ. Hay là để anh lo"
      },
      { 
        link: "https://imgur.com/DIGCMFF.jpg", 
        text : "Em yêu bầu trời xanh, yêu cả cánh hoa hồng.Nhưng không quên một thứ, đó chính là yêu anh"
      },
      { 
        link: "https://imgur.com/hoJbhYj.jpg", 
        text : "Chim thường yêu trời, con nít thường yêu kem.Anh thì rất yêu đời, và cũng rất yêu em"
      },
      { 
        link: "https://imgur.com/c3yVj1P.jpg", 
        text : "Xiêu lòng ánh mắt. Xong liều yêu anh"
      },
      { 
        link: "https://imgur.com/dsfpa7T.jpg", 
        text : "Bao năm phê đá phê cần, không bằng một phút ngồi gần phê anh"
      },
      { 
        link: "https://imgur.com/VP8Hn8v.jpg", 
        text : "Thay vì tặng anh một đóa hồng không héo, để em gửi anh một mối tình không phai!"
      },
      { 
        link: "https://imgur.com/lHRqbfD.jpg", 
        text : "Họ thích nghe nhạc vì lời. Còn em lại thích trọn đời có anh."
      },
      { 
        link: "https://imgur.com/fHvsaXi.jpg", 
        text : "Con cóc là cậu ông trời. Còn anh là cả cuộc đời của em."
      },
      { 
        link: "https://imgur.com/C8hGkOW.jpg", 
        text : "Anh ơi gió lạnh gần kề. Anh mau thu xếp mà về với em."
      },
      { 
        link: "https://imgur.com/c8116y3.jpg", 
        text : "Mọi người thì thích trà sữa. Còn em thì thích trà trộn vào tim anh."
      },
      { 
        link: "https://imgur.com/fJ8FS4A.jpg", 
        text : "Thời tiết này yêu em là hợp lý. Anh mà bỏ phí thì là anh ngu."
      },
      { 
        link: "https://imgur.com/SeHJ6Bu.jpg", 
        text : "Muốn cho thiên hạ trầm trồ. Sao anh không thử làm bồ của em."
      },
      { 
        link: "https://imgur.com/dnE6iJs.jpg", 
        text : "Cậu cận thị à?, nếu không cận, thì sao cậu lại không nhìn ra tớ thích cậu chứ?"
      },
      { 
        link: "https://imgur.com/9ZGWLEk.jpg", 
        text : "Cậu giống như Google vậy, bởi cậu là tất cả những gì tớ tìm kiếm"
      },
      { 
        link: "https://imgur.com/NntoS0z.jpg", 
        text : "Anh ơi em thích đồng hồ thích luôn cả việc làm bồ của anh."
      },
      { 
        link: "https://imgur.com/ioZZLW8.jpg", 
        text : "Nhân gian vốn lắm bộn bề sao không bỏ hết rồi về bên nhau."
      },
      { 
        link: "https://imgur.com/OcTaJBg", 
        text : "Màu anh thích là màu xanh dương, còn em mãi là người anh thương."
      },
      { 
        link: "https://imgur.com/d62Zo5w", 
        text : "Covid: Lây thì sẽ yếu, Em: Yêu thì phải lấy"
      },
      { 
        link: "https://imgur.com/7dWgPoD", 
        text : "Covid phải tránh đám đông. Còn em chỉ muốn gần anh chồng à"
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