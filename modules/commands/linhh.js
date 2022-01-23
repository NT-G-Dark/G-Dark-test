const fs = require("fs");
module.exports.config = {
name: "linhh",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "linnh",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("boss")==0 || (event.body.indexOf("boss 2")==0) || (event.body.indexOf("boss2")==0) || (event.body.indexOf("linh")==0) || (event.body.indexOf("Ê linh")==0)|| (event.body.indexOf("linh ơi")==0)) {
		var msg = {
				body: "Boss 2 Xinh Đẹp",
				attachment: fs.createReadStream(__dirname + `/noprefix/linh.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}