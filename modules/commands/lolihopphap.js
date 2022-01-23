module.exports.config = {
	name: "lolihopphap",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "CHỊU ;-;",
	description: "FBI =))",
	commandCategory: "hình ảnh",
	usages: "lolihopphap",
	cooldowns: 3
};

module.exports .run = async ({ api, event, Currencies, Users, args}) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	var content = args.join(" ");
	var money = (await Currencies.getData(event.senderID)).money
	if (money >= 2000) {
		axios.get('https://www.api-adreno.tk/loli').then(res => {
		let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
		var callback = function () {
					api.sendMessage({
						   body:  'Bỏ mẹ mày rồi con chó FBI đến rồi xD' || content,
						attachment: fs.createReadStream(__dirname + `/cache/2.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/2.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/2.${ext}`)).on("close", callback).then(Currencies.setData(event.senderID, options = {money: money - 2000}));
			})
	} else return api.sendMessage("Bạn cần 2000 đô để xem ảnh ?",event.threadID,event.messageID);
}