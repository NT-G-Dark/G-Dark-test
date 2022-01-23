const fs = require("fs");
module.exports.config = {
	name: "Yêu bot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Đăng", 
	description: "no prefix",
	commandCategory: "Nói yêu bot điiiiii",
	usages: "Yêu bot",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bot ơi")==0 || (event.body.indexOf("đĩ bot ơi")==0) || (event.body.indexOf("Bot ơi bot")==0) || (event.body.indexOf("Bot ơi")==0)) {
		var msg = {
				body: "đây là tin nhắn tự !Hiện tại admin không có mặt ở đây, chỉ có bot thôi.Tuy nhiên tớ vẫn sẽ nói:Bot yêu cậu rất nhiều - I love you so much💜",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}