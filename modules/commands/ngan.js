const fs = require("fs");
module.exports.config = {
name: "ngan",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "ngan",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ngân")==0 || (event.body.indexOf("bích ngân")==0) (event.body.indexOf("bngan")==0)) {
		var msg = {
				body: "bích ngân xinh đẹp quá đi :3",
				attachment: fs.createReadStream(__dirname + `/noprefix/7.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}