const fs = require("fs");
module.exports.config = {
name: "cơm",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "cơm",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Cơm")==0 || (event.body.indexOf("cơm")==0) || (event.body.indexOf("ăn cơm")==0) || (event.body.indexOf("Ăn cơm")==0)) {
		var msg = {
				body: "ăn cơm thôi",
				attachment: fs.createReadStream(__dirname + `/noprefix/com.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}