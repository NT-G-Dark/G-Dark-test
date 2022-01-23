module.exports.config = {
    name: "dammy",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "HTHB",
    description: "random ảnh đam mỹ",
    commandCategory: "game",
    usages: "",
    cooldowns: 5,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.run = async function({ api, event, args, Threads }) {
  const fs = require("fs-extra");
  const out = (msg) => api.sendMessage(msg, event.threadID,event.messageID);
  var files = fs.readdirSync(__dirname+"/cache/dammy") || [];
  var length = files.length;
  if (length == 0) return out(`Trong kho của bạn không có ảnh!`);
  var ran = files[Math.floor(Math.random() * length)];;
  return api.sendMessage({ body:"uây nhìn ah ngon quá mlem mlem",
    attachment: fs.createReadStream(__dirname + `/cache/dammy/${ran}`)
  },event.threadID,event.messageID);
}