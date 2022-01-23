const fs = require("fs");
module.exports.config = {
name: "vovanhoa",
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
	if (event.body.indexOf("vô văn hóa")==0 || (event.body.indexOf("chửi")==0) || (event.body.indexOf("chửi thề cc")==0) || (event.body.indexOf("mất dại")==0)  || (event.body.indexOf("cc")==0)|| (event.body.indexOf("dume")==0)|| (event.body.indexOf("dm")==0)|| (event.body.indexOf("clm")==0)|| (event.body.indexOf("đụ mẹ")==0) || (event.body.indexOf("Đm")==0)) {
		var msg = {
				body: "thằng mất dại tao bán mày giờ",
				attachment: fs.createReadStream(__dirname + `/noprefix/trandam.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}