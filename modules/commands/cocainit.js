const fs = require("fs");
module.exports.config = {
name: "có cái nịt",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "có cái nịt",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("có cái nịt")==0 || (event.body.indexOf("Có cái nịt")==0)) {
		var msg = {
				body: "nghe chú tiến đi \ncó cái nịt \ncòn đúng cái nịt",
				attachment: fs.createReadStream(__dirname + `/noprefix/cocainit.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}