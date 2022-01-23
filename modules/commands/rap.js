module.exports.config = {
    name: "rap",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "HTHB",
    description: "random video hát and rap",
    commandCategory: "chill",
    usages: "",
    cooldowns: 5,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.run = async function({ api, event, args, Threads }) {
  const fs = require("fs-extra");
  const out = (msg) => api.sendMessage(msg, event.threadID,event.messageID);
  var files = fs.readdirSync(__dirname+"/cache/rap") || [];
  var length = files.length;
  if (length == 0) return out(`Trong kho của bạn không có video!`);
  var ran = files[Math.floor(Math.random() * length)];;
  return api.sendMessage({ body:"Rap And Hát\nLưu Ý Đây Chỉ Là Những ViDEO Về Hát And Rap Của ACE Bạn Bè Bot Rap Hát Tặng Cho Bot Nghe Bot Xin Về Lại Để Cho Mn Nghe Chung Nhé TKS Chúc MN Có Những Phút Giây CHill Feel Nhạc Cùng Bot Qua Những VIDEO",
    attachment: fs.createReadStream(__dirname + `/cache/rap/${ran}`)
  },event.threadID,event.messageID);
}