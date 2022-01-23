module.exports.config = {
	name: "upt",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Kiểm tra thời gian bot đã online",
	commandCategory: "system",
	cooldowns: 5,
	dependencies: {
		"pidusage": ""
	}
};
 
function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
 
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs-extra")
	const fast = global.nodemodule["fast-speedtest-api"];
	const speedTest = new fast({
			token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
			verbose: false,
			timeout: 10000,
			https: true,
			urlCount: 5,
			bufferSize: 3,
			unit: fast.UNITS.Mbps
		});
	const ketqua = await speedTest.getSpeed();
	const moment = require("moment-timezone");
	var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss🌸");
	var day = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY🌸");
	const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
 
	const pidusage = await global.nodemodule["pidusage"](process.pid);
 
	const timeStart = Date.now();
	return api.sendMessage("", event.threadID, () => api.sendMessage({body: `🌸Thời gian hiện tại đang là : ${gio}\n🌸Hôm nay là ngày : ${day}\n🌸Bot đã hoạt động được ${hours} giờ ${minutes} phút ${seconds} giây.🌸\n🌸Tổng người dùng: ${global.data.allUserID.length}🌸\n🌸Tổng Nhóm: ${global.data.allThreadID.length}🌸\n🌸Cpu đang sử dụng: ${pidusage.cpu.toFixed(1)}%🌸\n🌸Ram đang sử dụng: ${byte2mb(pidusage.memory)}🌸\n🌸Ping: ${Date.now() - timeStart}ms🌸\n🌸Tốc độ mạng: ${ketqua}ms🌸\n🌸Code hentai : ${Math.floor(Math.random() * 99999)}🌸`, attachment: fs.createReadStream(__dirname + "/cache/help.gif") }, event.threadID, event.messageID));
}