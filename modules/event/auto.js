module.exports.config = {
	name: "auto",
	eventType: ["log:subscribe"],
	version: "1.0.0",
	credits: "Phạm Minh Duy",
	description: "Autoban",
};

module.exports.run = async function({ api, event, Threads }) {


   if (event.logMessageData.leftParticipantFbId== api.getCurrentUserID()) {
const moment = require("moment-timezone");
const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
let data = (await Threads.getData(event.threadID)).data || {};
				data.banned = true;
				data.reason = "Kick bot không lý do";
				data.dateAdded = time;
				await Threads.setData(event.threadID, { data });				global.data.threadBanned.set(event.threadID, { reason: data.reason, dateAdded: data.dateAdded });
}
}