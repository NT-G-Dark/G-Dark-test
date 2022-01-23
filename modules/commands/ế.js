const fs = require("fs");
module.exports.config = {
name: "ế",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "*Evil Nguyễn*",
	description: "ế",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ế quá à")==0 || (event.body.indexOf("ế")==0) || (event.body.indexOf("ế vcl ra luôn ấy")==0) || (event.body.indexOf("ê tụi mày tao ế quá à làm mai tao đi")==0) || (event.body.indexOf("fa")==0) || (event.body.indexOf("làm sao để có ny")==0) || (event.body.indexOf("thoát ế")==0)) {
		var msg = {
				body: "how to có người hốt",
				attachment: fs.createReadStream(__dirname + `/noprefix/ế.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}