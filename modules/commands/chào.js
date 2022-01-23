const fs = require("fs");
module.exports.config = {
name: "chào",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "*Evil Nguyễn*",
	description: "chào",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("chào")==0 || (event.body.indexOf("chào")==0)) {
		var msg = {
				body: "chào cc gì mà chào quen ko mà chào",
				attachment: fs.createReadStream(__dirname + `/noprefix/chào.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}