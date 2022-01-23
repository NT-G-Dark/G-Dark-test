const fs = require("fs");
module.exports.config = {
name: "tvy",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "tvy",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("thùy vy")==0 || (event.body.indexOf("vy")==0)) {
		var msg = {
				body: "đôi mắt long lanh tâm hồn mõng manh :3 em là xinh nhất ♥",
				attachment: fs.createReadStream(__dirname + `/noprefix/vy.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}