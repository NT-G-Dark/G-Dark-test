const fs = require("fs");
module.exports.config = {
name: "đỉ",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "*Evil Nguyễn*",
	description: "đỉ",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bd")==0 || (event.body.indexOf("bê đê")==0) || (event.body.indexOf("đĩ")==0) || (event.body.indexOf("đỉ")==0)) {
		var msg = {
				body: "dạ kính thưa quý dị em là con bóng long xiên",
				attachment: fs.createReadStream(__dirname + `/noprefix/đỉ.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}