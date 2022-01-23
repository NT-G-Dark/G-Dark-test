const fs = require("fs");
module.exports.config = {
name: "dkieu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "dkieu",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("dkieu")==0 || (event.body.indexOf("dkieu xinh đẹp")==0)) {
		var msg = {
				body: "dkieu xinh đẹp nhất trần đời :3",
				attachment: fs.createReadStream(__dirname + `/noprefix/dkieu.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}