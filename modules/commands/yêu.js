const fs = require("fs");
module.exports.config = {
name: "yêu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "yêu",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("yêu đương cc")==0 || (event.body.indexOf("yêu đương cái lồn")==0) || (event.body.indexOf("yêu")==0) || (event.body.indexOf("trend")==0) || (event.body.indexOf("đú trend")==0) || (event.body.indexOf("yêu đương cái lồn")==0)) {
		var msg = {
				body: "yêu đương cc \ntrend cc \nyêu đương cái máu lồn \nđéo mẹ bố mẹ thì cồng lưng ra nuôi con ăn vs học mà hở tí tuổi nứt mắt ra mà yêu vs chả đương \nheyiz chán con vs chả cái đéo biết ns sao",
				attachment: fs.createReadStream(__dirname + `/noprefix/trend.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}