module.exports.config = {
	name: "goiadmin",
	version: "1.0.0-beta-fixbyDungUwU",
	hasPermssion: 0,
	credits: "ZyrosGenZ-fixbyDungUwU",
	description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
	commandCategory: "Other",
	usages: "",
	cooldowns: 1
  };
  module.exports.handleEvent = function({ api, event }) {
	if (event.senderID !== "100071296895456") {
		var aid = ["100056831031407","100071296895456"];
	  for (const id of aid) {
	  if ( Object.keys(event.mentions) == id) {
		var msg = ["EWWWW 💖😍😘 Bé Iu Ơi Kêu Anh Cái Gì Ó BABI Ơi Cần Gì Thì Qua Đây IB VS Anh Nè R 2 Đứa Mình Cùng Hàng Huyên Tâm Sự Để Có Chổ Chống Lấp Đầy Khoản Chống Không Gian Riêng Tư Của 2 Đứa Mình Nè :3 \nhttps://www.facebook.com/DevilNguyenSadBoy"];
		return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
	  }
	  }}
  };
  module.exports.run = async function({}) {
	}