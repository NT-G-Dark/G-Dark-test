const fs = require("fs");
module.exports.config = {
name: "yasuo",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "yasuo",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("yasuo")==0 || (event.body.indexOf("yasuo")==0)) {
		var msg = {
				body: "Hasagi",
				attachment: fs.createReadStream(__dirname + `/noprefix/yasuo.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}