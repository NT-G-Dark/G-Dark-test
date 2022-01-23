const fs = require("fs");
module.exports.config = {
name: "haha",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "*Evil Nguyễn*",
	description: "haha",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("kkk")==0 || (event.body.indexOf("haha")==0) || (event.body.indexOf("hehe")==0) || (event.body.indexOf("hihi")==0)) {
		var msg = {
				body: "cười ghê vcl",
				attachment: fs.createReadStream(__dirname + `/noprefix/haha.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}