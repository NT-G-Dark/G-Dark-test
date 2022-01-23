module.exports.config = {
    name: "tthaoxinh",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "HTHB",
    description: "random ảnh girl xinh Thu Thảo Xinh Đẹp",
    commandCategory: "media",
    usages: "",
    cooldowns: 5,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.run = async function({ api, event, args, Threads }) {
  const fs = require("fs-extra");
  const out = (msg) => api.sendMessage(msg, event.threadID,event.messageID);
  var files = fs.readdirSync(__dirname+"/cache/thao") || [];
  var length = files.length;
  if (length == 0) return out(`Trong kho của bạn không có ảnh!`);
  var ran = files[Math.floor(Math.random() * length)];;
  return api.sendMessage({
    attachment: fs.createReadStream(__dirname + `/cache/thao/${ran}`)
  },event.threadID,event.messageID);
}