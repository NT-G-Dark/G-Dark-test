const fs = require("fs");
module.exports.config = {
name: "dậy",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "*Evil Nguyễn*",
	description: "dậy",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("dậy mày")==0 || (event.body.indexOf("dậy đi")==0) || (event.body.indexOf("dậy chưa")==0)) {
		var msg = {
				body: "đụ mẹ mày dậy đi",
				attachment: fs.createReadStream(__dirname + `/noprefix/dậy.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}