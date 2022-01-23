const fs = require("fs");
module.exports.config = {
name: "mtam",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "mtam",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("mtam")==0 || (event.body.indexOf("Mỹ tâm")==0) (event.body.indexOf("Mytam")==0)) {
		var msg = {
				body: "mỹ tâm xinh đẹp :3",
				attachment: fs.createReadStream(__dirname + `/noprefix/10.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}