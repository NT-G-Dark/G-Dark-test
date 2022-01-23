const fs = require("fs");
module.exports.config = {
name: "tham lam",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "tham lam",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tham lam")==0 || (event.body.indexOf("tham lam")==0)) {
		var msg = {
				body: "nghe chú tiến đi \ntham lam",
				attachment: fs.createReadStream(__dirname + `/noprefix/thamlam.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}