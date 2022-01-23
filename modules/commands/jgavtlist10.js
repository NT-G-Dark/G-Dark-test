module.exports.config = {
	name: "jgavtlist10",
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
api.sendMessage({body:`ĐÂY LÀ DANH SÁCH ID NHÂN VẬT Dành Cho Bạn:\n136/ ID Nhân Vật: 135 -> Name Nhân Vật: hair black\n137/ ID Nhân Vật: 136 -> Name Nhân Vật: yumeko\n138/ ID Nhân Vật: 137 -> Name Nhân Vật: dimaria yesta\n139/ ID Nhân Vật: 138 -> Name Nhân Vật: amajiki\n140/ ID Nhân Vật: 139 -> Name Nhân Vật: dazai\n141/ ID Nhân Vật: 140 -> Name Nhân Vật: reki\n142/ ID Nhân Vật: 141 -> Name Nhân Vật: langa\n143/ ID Nhân Vật: 142 -> Name Nhân Vật: dabi\n144/ ID Nhân Vật: 143 -> Name Nhân Vật: kuroko\n145/ ID Nhân Vật: 144 -> Name Nhân Vật: jinmori\n146/ ID Nhân Vật: 145 -> Name Nhân Vật: l lawlie\n147/ ID Nhân Vật: 146 -> Name Nhân Vật: naraku\n148/ ID Nhân Vật: 147 -> Name Nhân Vật: sesshoumaru\n149/ ID Nhân Vật: 148 -> Name Nhân Vật: tomoe\n150/ ID Nhân Vật: 149 -> Name Nhân Vật: lunan\n<-Số Trang 10/16->\nDùng ${prefix}jgavtlist + < số trang > để xem trang tiếp theo`},event.threadID, event.messageID);
}