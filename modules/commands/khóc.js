const fs = require("fs");
module.exports.config = {
name: "khóc​​",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Vinhbeat",
	description: "Vinhbeat",
	commandCategory: "Hidden command",
	usages: "test",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Buồn")==0 || (event.body.indexOf("buồn")==0)) {
		var msg = {
				body: "Đời có bao nhiêu đâu mà buồn, hãy vững tin và quên đi tất cả....",
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}