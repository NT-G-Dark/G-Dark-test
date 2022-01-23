const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "inforadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "evill",
  description: "Kiểm tra thông tin ngơời dùng.",
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
  \n✔ ADMIN Có Cho Thuê Bot và Bán Sourc Code Bot + Vps Nhé :3  Tks
  \n🌸Nếu Ai Có Lòng Hảo Tâm Thì Cho ADMIN XiN Ít TIỀN DONATE Để Có Ít Kinh Phí Duy Trì Bot Ạ ADMIN Rất Cảm Ơn Nhiều Ạ Tùy Lòng Hảo Tâm Ạ🌸\n🌸MOMO: 0363003232 | Chủ Tài Khoản Nguyễn Minh Tiến Đạt🌸
  \n👉 Profile: https://www.facebook.com/DevilNguyenSadBoy`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(
        encodeURI(`https://4.bp.blogspot.com/-BwA9ZTsNLa8/WVyMWQgFsFI/AAAAAAAAAtk/RWyNW1yCAS4KtyKcmlSiV_bPyOXo87J_gCLcBGAs/s640/t%25E1%25BA%25A3i%2Bxu%25E1%25BB%2591ng.jpg`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
       };
