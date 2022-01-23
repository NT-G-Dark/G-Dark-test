module.exports.config = {
	name: "jgavtlist15",
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
api.sendMessage({body:`ĐÂY LÀ DANH SÁCH ID NHÂN VẬT Dành Cho Bạn:\n211/ ID Nhân Vật: 210 -> Name Nhân Vật: konan\n212/ ID Nhân Vật: 211 -> Name Nhân Vật: obito\n213/ ID Nhân Vật: 212 -> Name Nhân Vật: kakuzu\n214/ ID Nhân Vật: 213 -> Name Nhân Vật: deidara\n215/ ID Nhân Vật: 214 -> Name Nhân Vật: itachi\n216/ ID Nhân Vật: 215 -> Name Nhân Vật: hidan\n217/ ID Nhân Vật: 216 -> Name Nhân Vật: kisame\n218/ ID Nhân Vật: 217 -> Name Nhân Vật: sasori\n219/ ID Nhân Vật: 218 -> Name Nhân Vật: zetsu\n220/ ID Nhân Vật: 219 -> Name Nhân Vật: orochimaru\n221/ ID Nhân Vật: 220 -> Name Nhân Vật: tenten\n222/ ID Nhân Vật: 221 -> Name Nhân Vật: kushina\n223/ ID Nhân Vật: 222 -> Name Nhân Vật: minato\n224/ ID Nhân Vật: 223 -> Name Nhân Vật: gaara\n225/ ID Nhân Vật: 224 -> Name Nhân Vật: hashirama\n<-Số Trang 15/16->\nDùng ${prefix}jgavtlist + < số trang > để xem trang tiếp theo`},event.threadID, event.messageID);
}