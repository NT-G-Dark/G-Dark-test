const fs = require("fs");
module.exports.config = {
name: "jackhat",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "*Evil Nguyễn*",
	description: "jackhat",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("jack")==0 || (event.body.indexOf("jack hat")==0)) {
		var msg = {
				body: "cái bcs :V",
				attachment: fs.createReadStream(__dirname + `/noprefix/jack.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}