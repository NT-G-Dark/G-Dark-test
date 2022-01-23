const fs = require("fs");
module.exports.config = {
	name: "bot đâu rồi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Đăng", 
	description: "no prefix",
	commandCategory: "Nói yêu bot điiiiii",
	usages: "bot đâu rồi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bot đâu rồi")==0 || (event.body.indexOf("Bot đâu rồi")==0) || (event.body.indexOf("bot đâu")==0) || (event.body.indexOf("đĩ bot đâu rồi")==0)) {
		var msg = {
				body: "kêu gì con đĩ t vừa off đi công việc có tí đã kêu! chuyện buồn hay cần lời khuyên thì đã có bot đây yên tâm trừ khi pay acc chứ lúc nào bot cũng ở bên nhó  ",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}