module.exports.config = {
	name: "log",
	eventType: ["log:unsubscribe","log:subscribe","log:thread-name"],
	version: "1.0.0",
	credits: "*Evil Nguyễn*",
	description: "Ghi lại thông báo các hoạt đông của bot!",
    envConfig: {
        enable: true
    }
};

module.exports.run = async function({ api, event, Threads, Users }) {
    const logger = require("../../utils/log");
    if (!global.configModule[this.config.name].enable) return;
    var formReport =  "=== Bot Notification ===" +
                        "\n\n» Thread mang ID: " + event.threadID +
                        "\n» Hành động: {task}" +
                        "\n» Hành động được tạo bởi userID: " + event.author +
                        "\n» " + Date.now() +" «",
        task = "";
    switch (event.logMessageType) {
        case "log:thread-name": {
            const oldName = (await Threads.getData(event.threadID)).name || "Tên không tồn tại",
                    newName = event.logMessageData.name || "Tên không tồn tại";
            task = "Người dùng thay đổi tên nhóm từ: '" + oldName + "' thành '" + newName + "'";
            await Threads.setData(event.threadID, {name: newName});
            break;
        }
        case "log:subscribe": {
            if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {task = "Người dùng đã thêm bot vào một nhóm mới!";
            const moment = require("moment-timezone");
            const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
            let data = (await Threads.getData(event.threadID)).data || {};
                            data.banned = true;
                            data.reason = "Thằng Lồn súc vật đầu bùi rẻ rách kik bot bố  mày không lý do thì cút bố mày ban đéo ns nhiều";
                            data.dateAdded = time;
                            await Threads.setData(event.threadID, { data });				global.data.threadBanned.set(event.threadID, { reason: data.reason, dateAdded: data.dateAdded });
                            const name = await Users.getNameUser(event.senderID)
                            api.sendMessage( `ADMIN Ơi Có 1 Box Cần Được Duyệt`, "100056831031407")
        }break;
        }
        case "log:unsubscribe": {
            if (event.logMessageData.leftParticipantFbId== api.getCurrentUserID()) {task = "Người dùng đã kick bot ra khỏi nhóm!"
            const name = await Users.getNameUser(event.senderID)
            api.sendMessage( `đã có 1 thằng đầu bùi rẻ rách súc vật trong box ${name} cố tình vi phạm luật bot cố tình kik bot r tag lại`, "100056831031407")
            const moment = require("moment-timezone");
            const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
            let data = (await Threads.getData(event.threadID)).data || {};
                            data.banned = true;
                            data.reason = "Kick bot không lý do";
                            data.dateAdded = time;
                            await Threads.setData(event.threadID, { data });				global.data.threadBanned.set(event.threadID, { reason: data.reason, dateAdded: data.dateAdded });
                        }break;
        }
        default: 
            break;
    }

    if (task.length == 0) return;

    formReport = formReport
    .replace(/\{task}/g, task);

    return api.sendMessage(formReport, global.config.ADMINBOT[0], (error, info) => {
        if (error) return logger(formReport, "[ Logging Event ]");
    });
}