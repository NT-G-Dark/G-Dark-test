const fs = require("fs");
module.exports.config = {
name: "cocailon",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "có cái lồn",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("lồn")==0 || (event.body.indexOf("Lồn")==0) || (event.body.indexOf("có cái lồn")==0) || (event.body.indexOf("Có cái lồn")==0)) {
		var msg = {
				body: "có ái lồn",
				attachment: fs.createReadStream(__dirname + `/noprefix/cocailon.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}