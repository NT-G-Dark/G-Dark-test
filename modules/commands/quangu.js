const fs = require("fs");
module.exports.config = {
name: "quángu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "quá ngu",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("sao mày ngu thế hả")==0 || (event.body.indexOf("quá ngu")==0)) {
		var msg = {
				body: "sao mày ngu vcl ra thế hả \nquá ngu",
				attachment: fs.createReadStream(__dirname + `/noprefix/quangu.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}