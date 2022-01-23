 /**
* @author OreoZera
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
    name: "lacmong",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "OreoZera",
    description: "Gái múp nhảy lắc mông. (Lưu Ý Đây Là Lệnh Ảnh 18+ Cân Nhắc Trước Khi Sử Dụng)",
    commandCategory: "nsfw",
    usages: "lắc mông",
    cooldowns: 5,
    dependencies: {
      "request":"",
      "fs-extra":"",
      "axios":""
    }
  };
  
  module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
    var link = [
  "https://imgur.com/CEMibcu.gif",
  
    ];
    var max = Math.floor(Math.random() * 6);  
    var min = Math.floor(Math.random() * 2);
    var data = await Currencies.getData(event.senderID);
    var exp =  data.exp;
    var money = data.money
             {
     var callback = () => api.sendMessage({body:`Bổ mắt nhé uây em này trong nhìn được vcl ra ngon ấy múp uấy tuyệt vcl đúng bổ mắt vcl ra dc thực sự ae ạ😼`,attachment: fs.createReadStream(__dirname + "/cache/lacmong.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/lacmong.gif")); 
        return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/lacmong.gif")).on("close",() => callback());
     }
  };
  