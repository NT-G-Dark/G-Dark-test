const fs = require("fs");
module.exports.config = {
name: "tồi",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "tồi",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tồi")==0 || (event.body.indexOf("Tồi")==0)) {
		var msg = {
				body: "hihi",
				attachment: fs.createReadStream(__dirname + `/noprefix/tồi.png`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}