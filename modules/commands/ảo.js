const fs = require("fs");
module.exports.config = {
name: "ảo",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "aor",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ảo")==0 || (event.body.indexOf("Ảo")==0)) {
		var msg = {
				body: "DJTMEMAY ảo thật đấy =))))",
				attachment: fs.createReadStream(__dirname + `/noprefix/ảo.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}