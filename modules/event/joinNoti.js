module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.4",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event, Users }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	const fs = require ("fs-extra")
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Bypass bởi Mai Huy Bảo" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage({body: `🌸-ADMIN BOT *Evil Nguyễn* Đã Connected successfully BOT!🌸\n🌸-Vui Lòng Hãy Bấm Rankup 2 Lần Để Tắt🌸\n🌸-Vui Lòng Hãy Bấm Resend 1 Lần Để Tắt🌸\n🌸-Cảm ơn bạn đã sử dụng con bot này, chúc bạn sử dụng vui vẻ UwU🌸\n🔥-Sau Khi Bot Đã Được Kết Nối Xong Thì Xin Hãy Bấm Chat Đứng 2 Chữ *Luật bot* Mà Xem Giúp Giùm Trc Cái R Làm Gì Thì Làm Chỉ Cần Chat Từ *Luật bot* Không Cần Xài Lệnh Vì Nó Là noprefix Tks🔥\n🔥-Nếu Muốn Xem Lệnh Thì Hãy Bấm *Menu* Nhé🔥`, attachment: fs.createReadStream(__dirname + "/cache/hi.gif") }, threadID);
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path,`box3.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);

				if (!global.data.allUserID.includes(id)) {
					await Users.createData(id, { name: userName, data: {} });
					global.data.userName.set(id, userName);
					global.data.allUserID.push(id);
				}
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "Chào mừng {name}.\nđã đến với {threadName} vương quốc xinh đẹp này 👑.\n{type} và là thành viên thứ {soThanhVien} của nhóm \nMong bạn tương tác tích cực để không bị lọc nhầm nhéee 😍♥" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}
