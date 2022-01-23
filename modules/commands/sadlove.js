const fs = require("fs");
module.exports.config = {
name: "sadlove",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "sadlove",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("buồn")==0 || (event.body.indexOf("chán đời")==0) || (event.body.indexOf("thất tình")==0) || (event.body.indexOf("sad love")==0) || (event.body.indexOf("Buồn")==0) || (event.body.indexOf("Chán đời")==0) || (event.body.indexOf("Thất tình")==0) || (event.body.indexOf("Sad love")==0)) {
		var msg = {
				body: "Tôi cười chưa chắc tôi đã vui 🙁",
				attachment: fs.createReadStream(__dirname + `/noprefix/sadlove.gif`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}