const fs = require("fs");
module.exports.config = {
name: "kkk",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "*Evil Nguyễn*",
	description: "kkk",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("kkk")==0 || (event.body.indexOf("haha")==0)) {
		var msg = {
				body: "kha kha kha mày chết mẹ mày r con",
				attachment: fs.createReadStream(__dirname + `/noprefix/cmmr.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}