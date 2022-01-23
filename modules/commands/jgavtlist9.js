module.exports.config = {
	name: "jgavtlist9",
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
api.sendMessage({body:`ĐÂY LÀ DANH SÁCH ID NHÂN VẬT Dành Cho Bạn:\n121/ ID Nhân Vật: 120 -> Name Nhân Vật: shizuka\n122/ ID Nhân Vật: 121 -> Name Nhân Vật: mai\n123/ ID Nhân Vật: 122 -> Name Nhân Vật: hiroomi\n124/ ID Nhân Vật: 123 -> Name Nhân Vật: kenma\n125/ ID Nhân Vật: 124 -> Name Nhân Vật: siesta\n126/ ID Nhân Vật: 125 -> Name Nhân Vật: anos\n127/ ID Nhân Vật: 126 -> Name Nhân Vật: gin\n128/ ID Nhân Vật: 127 -> Name Nhân Vật: takegawa hotaru\n129/ ID Nhân Vật: 128 -> Name Nhân Vật: shin\n130/ ID Nhân Vật: 129 -> Name Nhân Vật: usagi tsukino\n131/ ID Nhân Vật: 130 -> Name Nhân Vật: cherry\n132/ ID Nhân Vật: 131 -> Name Nhân Vật: asta\n133/ ID Nhân Vật: 132 -> Name Nhân Vật: luck voltia\n134/ ID Nhân Vật: 133 -> Name Nhân Vật: midoriya\n135/ ID Nhân Vật: 134 -> Name Nhân Vật: toga himiko\n<-Số Trang 9/16->\nDùng ${prefix}jgavtlist + < số trang > để xem trang tiếp theo`},event.threadID, event.messageID);
}