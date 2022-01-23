const fs = require("fs");
module.exports.config = {
	name: "dark",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "thọ", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "dark",
    cooldowns: 5, 
};

module.exports.handlEvent= async ({ event, api, Currencies,Users, args, utils }) => {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
if (event.body.indexOf("dảk")==0 || (event.body.indexOf("Dảk")==0)) {
		return api.sendMessage(`Đĩ mẹ mày thích dark không con Dog 😏` , event.threadID, event.messageID)
		}
};


module.exports.run = async ({ event, api, Currencies, args, utils }) => {
}