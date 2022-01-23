const fs = require("fs");
module.exports.config = {
name: "cc",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "cc",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("cặc")==0 || (event.body.indexOf("Cặc")==0) || (event.body.indexOf("con cặc")==0) || (event.body.indexOf("Con cặc")==0) || (event.body.indexOf("cc")==0) || (event.body.indexOf("Cc")==0)) {
		var msg = {
				body: "con cặc bất ngờ chưa thằng lồn)))",
				attachment: fs.createReadStream(__dirname + `/noprefix/concac.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}