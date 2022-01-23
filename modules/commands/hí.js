const fs = require("fs");
module.exports.config = {
name: "hí",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "*Evil Nguyễn*",
	description: "hí",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("hí")==0 || (event.body.indexOf("hí chào cậu")==0)) {
		var msg = {
				body: "hí chào cậu",
				attachment: fs.createReadStream(__dirname + `/noprefix/hí.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}