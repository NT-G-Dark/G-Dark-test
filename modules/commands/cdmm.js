const fs = require("fs");
module.exports.config = {
name: "cdmm",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "*Evil Nguyễn*",
	description: "cdmm",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("cdmm")==0 || (event.body.indexOf("cái đị mẹ mày")==0) || (event.body.indexOf("dm")==0) || (event.body.indexOf("dmm")==0)|| (event.body.indexOf("cmm")==0) || (event.body.indexOf("clmm")==0) || (event.body.indexOf("đm")==0)) {
		var msg = {
				body: "cái địt mẹ mày",
				attachment: fs.createReadStream(__dirname + `/noprefix/cdmm.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}