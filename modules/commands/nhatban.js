const fs = require("fs");
module.exports.config = {
name: "nhatban",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "nhất bạn",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("được vcl luôn bạn ơi")==0 || (event.body.indexOf("nhất bạn")==0) || (event.body.indexOf("bạn là nhất")==0) || (event.body.indexOf("bạn là số 1")==0)) {
		var msg = {
				body: "bạn là số 1",
				attachment: fs.createReadStream(__dirname + `/noprefix/nhatban.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}