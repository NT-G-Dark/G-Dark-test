module.exports.config = {
	name: "menu",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Hướng dẫn cho người mới",
	commandCategory: "system",
	usages: "[Tên module]",
	cooldowns: 5,
	envConfig: {
		autoUnsend: true,
		delayUnsend: 10
	}
};

module.exports.languages = {
	"vi": {
		"moduleInfo": "🌸 %1 🌸\n%2\n\n❯ Cách sử dụng: %3\n❯ Thuộc nhóm: %4\n❯ Thời gian chờ: %5 giây(s)\n❯ Quyền hạn: %6\n🌺𝐸𝑣𝑖𝑙𝑙 𝐵𝑜𝑡 𝑈𝑤𝑈🌺",
		"helpList": '🌸Sử dụng: "%2 help từng lệnh ở trên" để xem chi tiết cách sử dụng! | Hiện tại đang có %1 lệnh có thể sử dụng trên bot này.🌸\n🌸Bot được điều hành bởi Evil Nguyễn.🌸\n🌸Mọi thắc mắc liên hệ Admin Bot 🌸\n🌸Fb : https://www.facebook.com/DevilNguyenSadBoy 🌸\n🌸Zalo : 0332231321🌸\n🌸Chúc bạn sử dụng bot vui vẻ 🌸\n🌸ADMIN Có Cho Thuê Bot và Bán Sourc Code Bot Mess + Bot Discord + Vps Nhé🌸\n🌸Tks Chúc Mọi Người Sử Dụng Bot Vui Vẻ🌸\n🌸Nếu Ai Có Lòng Hảo Tâm Thì Cho ADMIN XiN Ít TIỀN DONATE Để Có Ít Kinh Phí🌸🌸Duy Trì Bot Ạ ADMIN Rất Cảm Ơn Nhiều Ạ Tùy Lòng Hảo Tâm Ạ🌸\n🌸MOMO: 0363003232 | Chủ Tài Khoản Nguyễn Minh Tiến Đạt🌸\n🌸MENU sẽ tự động gỡ sau 10 phút🌸`',
	  "user": "Người dùng",
        "adminGroup": "Quản trị viên nhóm",
        "adminBot": "Quản trị viên bot"
	},
	"en": {
		"moduleInfo": "「 %1 」\n%2\n\n❯ Usage: %3\n❯ Category: %4\n❯ Waiting time: %5 seconds(s)\n❯ Permission: %6\n\n» Module code by %7 «",
		"helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
}

module.exports.handleEvent = function ({ api, event, getText }) {
  const fs = require("fs-extra");
	const { commands } = global.client;
	const { threadID, messageID, body } = event;
	const folderimg = __dirname + "/cache/randomimg";
	if (!fs.existsSync(folderimg)) fs.mkdir(folderimg);
	const listImg = fs.readdirSync(folderimg);
	
	if (!body || typeof body == "undefined" || body.indexOf("menu") != 0) return;
	const splitBody = body.slice(body.indexOf("menu")).trim().split(/\s+/);
	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	return api.sendMessage({ body: getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), attachment: fs.createReadStream(folderimg+"/"+listImg[Math.floor(Math.random() * listImg.length)])}, threadID, messageID);
}

module.exports.run = function({ api, event, args, getText }) {
  const fs = require("fs-extra");
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const folderimg = __dirname + "/cache/randomimg";
	if (!fs.existsSync(folderimg)) fs.mkdir(folderimg);
	const listImg = fs.readdirSync(folderimg);
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	if (!command) {
		const command = commands.values();
		var group = [], msg = "";
		for (const commandConfig of command) {
			if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
			else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
		}
		//thay ở đây anh u
		group.forEach(commandGroup => msg += `🌸 ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)} 🌸\n${commandGroup.cmds.join(', ')}\n\n`);
		return api.sendMessage({body: msg + getText("helpList", commands.size, prefix), attachment: fs.createReadStream(folderimg+"/"+listImg[Math.floor(Math.random() * listImg.length)])}, threadID, async (error, info) =>{
			if (autoUnsend) {
				await new Promise(resolve => setTimeout(resolve, delayUnsend * 1000));
				return api.unsendMessage(info.messageID);
			} else return;
		});

	}

	return api.sendMessage({ body: getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), attachment: fs.createReadStream(folderimg+"/"+listImg[Math.floor(Math.random() * listImg.length)])}, threadID, messageID);
}