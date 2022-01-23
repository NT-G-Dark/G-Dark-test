const fs = require("fs");
module.exports.config = {
name: "stk",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "stk",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("momo")==0 || (event.body.indexOf("atm")==0) || (event.body.indexOf("stk")==0) || (event.body.indexOf("bank")==0)) {
		var msg = {
				body: "💟Trương Trình Ăn Xin Của ADMIN BOT💟\n💟Mọi Người Ủng Hộ Cho ADMIN Bot Xin Ít Tiền Để Có Kinh Phi Duy Trì Bot Vs Ạ Tùy Lòng Hảo Tâm💟\n💟ADMIN Xin Cảm Ơn MN Nhiều Lắm Ạ💟\n💟 *MOMO:0363003232* 💟\n💟*Chủ TK:Nguyễn Minh Tiến Đạt*💟 \n💟*TSR:0332231321* 💟\n💟*Chủ TK:Nguyễn Minh Tiến Đạt*💟 \n💟Hoặc donate thầm lặng thì ib qua💟\n💟FB: https://www.facebook.com/DevilNguyenSadBoy 💟",
				attachment: fs.createReadStream(__dirname + `/noprefix/cute.gif`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}