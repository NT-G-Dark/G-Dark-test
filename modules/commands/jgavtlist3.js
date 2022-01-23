module.exports.config = {
	name: "jgavtlist3",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Evill Nguyễn",
	description: "xem id nhân vật bạn cần muốn tạo",
	commandCategory: "jgavt",
	usages: "[list + số trang + danh sách id nhân vật bạn cần xem vào tạo]",
	cooldowns: 0
};

module.exports.run = function ({ event, api }) {
	const prefix = global.config.PREFIX;
api.sendMessage({body:`ĐÂY LÀ DANH SÁCH ID NHÂN VẬT Dành Cho Bạn:\n31/ ID Nhân Vật: 30 -> Name Nhân Vật: killua zoldyck\n32/ ID Nhân Vật: 31 -> Name Nhân Vật: hanako\n33/ ID Nhân Vật: 32 -> Name Nhân Vật: saber\n34/ ID Nhân Vật: 33 -> Name Nhân Vật: sakura saber\n35/ ID Nhân Vật: 34 -> Name Nhân Vật: sato kazuma\n36/ ID Nhân Vật: 35 -> Name Nhân Vật: aqua\n37/ ID Nhân Vật: 36 -> Name Nhân Vật: megumin\n38/ ID Nhân Vật: 37 -> Name Nhân Vật: darkness\n39/ ID Nhân Vật: 38 -> Name Nhân Vật: kyaru\n40/ ID Nhân Vật: 39 -> Name Nhân Vật: miku\n41/ ID Nhân Vật: 40 -> Name Nhân Vật: shido\n42/ ID Nhân Vật: 41 -> Name Nhân Vật: kurumi\n43/ ID Nhân Vật: 42 -> Name Nhân Vật: kaguya\n44/ ID Nhân Vật: 43 -> Name Nhân Vật: ainz ooal gown\n45/ ID Nhân Vật: 44 -> Name Nhân Vật: milim\n<-Số Trang 3/16->\nDùng ${prefix}jgavtlist + < số trang > để xem trang tiếp theo`},event.threadID, event.messageID);
}