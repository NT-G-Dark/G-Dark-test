const fs = require("fs");
module.exports.config = {
name: "Chill",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Chill",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Chill")==0 || (event.body.indexOf("chill")==0)) {
		var msg = {
				body: "Uây chill vcl thêm điếu cần trên đồi đà lạt là chết cmnr hết bài",
				attachment: fs.createReadStream(__dirname + `/noprefix/chill.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}