const fs = require("fs");
module.exports.config = {
name: "babi",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "babi",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("babi")==0 || (event.body.indexOf("bé iu")==0) || (event.body.indexOf("babi của anh xinh tóa")==0)) {
		var msg = {
				body: "babi của anh cute đáng iu dễ thw vậy ta :3 \nbabi của anh xinh tóa :3 \nNgAnh Cute vãi trưởng😘😍💖",
				attachment: fs.createReadStream(__dirname + `/noprefix/babi.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}