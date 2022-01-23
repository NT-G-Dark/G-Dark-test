const fs = require("fs");
module.exports.config = {
name: "love",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "love",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("love")==0 || (event.body.indexOf("iloveyou")==0) (event.body.indexOf("i love you")==0) (event.body.indexOf("iloveu")==0) (event.body.indexOf("i love u")==0)) {
		var msg = {
				body: "I LOVE YOU BABI :3♥😘💖😍",
				attachment: fs.createReadStream(__dirname + `/noprefix/love.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}