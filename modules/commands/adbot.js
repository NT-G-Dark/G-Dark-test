const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "adbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "*Evil Nguyễn*",
  description: "Kiểm tra thông tin người dùng.",
  commandCategory: "Info",
  usages: "info",
  cooldowns: 1,
  dependencies: {
"request": ""
}
};

module.exports.run = async({api,event,args,Users,global,Currencies}) => {
var callback = () => api.sendMessage(
  {body:`梁ADMIN BOT梁\n
  \n👀 Tên: *Evil Nguyễn*
  \n❎ Tuổi: 18
  \n👤 😶 Giới tính: Nam
  \n💫 Chiều cao cân nặng: 1m7 50 kg
  \n💘 Mối quan hệ: Độc thân
  \n😎 Quê quán: Miền Tây Kiên Giang
  \n🤔 Nơi ở: TPCHM
  \n👫 Gu: Giọng nói , Loli :<
  \n🌸 Tính cách: Là một con người Fboiz nhưng khi yêu xong rất là tềnh cảm :3
  \n👉 Profile: https://www.facebook.com/DevilNguyenSadBoy`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(
        encodeURI(`https://graph.facebook.com/${100056831031407}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
       };