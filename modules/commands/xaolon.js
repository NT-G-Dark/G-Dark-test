const fs = require("fs");
module.exports.config = {
name: "xaolon",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "hihihihi",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("xl")==0 || (event.body.indexOf("xạo lồn")==0) || (event.body.indexOf("xlon")==0) || (event.body.indexOf("xàm lồn")==0)  || (event.body.indexOf("xàm lông")==0)) {
		var msg = {
				body: "mày mà xạo lồn là mày chết con đĩ mẹ mày vs tao đấy con chó rách này",
				attachment: fs.createReadStream(__dirname + `/noprefix/xaolon.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}