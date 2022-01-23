const fs = require("fs");
module.export.config = {
	name: "yêu bot",
    version: "1.0.1",
    hasPermssion: 0,
	credits: "Đăng", 
	description: "no prefix",
	commandCategory: "Chửi bot ngu đi",
	usages: "Bot lồn",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bot lon")==0 || (event.body.indexOf("Bot lon")==0) || (event.body.indexOf("Bot lồn")==0) || (event.body.indexOf("bot lồn")==0) || (event.body.indexOf("Bot loz")==0) || (event.body.indexOf("bot loz")==0)) {
		var msg = {
				body: "chửi = auto ban đéo nới nhiều :)",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}