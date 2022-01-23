module.exports.config = {
	name: "jgavtlist16",
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
api.sendMessage({body:`ĐÂY LÀ DANH SÁCH ID NHÂN VẬT Dành Cho Bạn:\n226/ ID Nhân Vật: 225 -> Name Nhân Vật: madara\n227/ ID Nhân Vật: 226 -> Name Nhân Vật: shikamaru\n228/ ID Nhân Vật: 227 -> Name Nhân Vật: temari\n229/ ID Nhân Vật: 228 -> Name Nhân Vật: uchiha shisui\n230/ ID Nhân Vật: 229 -> Name Nhân Vật: hinata hyuga\n231/ ID Nhân Vật: 230 -> Name Nhân Vật: asuma\n232/ ID Nhân Vật: 231 -> Name Nhân Vật: tobirama\n233/ ID Nhân Vật: 232 -> Name Nhân Vật: songoku\n234/ ID Nhân Vật: 233 -> Name Nhân Vật: vegeta\n235/ ID Nhân Vật: 234 -> Name Nhân Vật: gohan\n236/ ID Nhân Vật: 235 -> Name Nhân Vật: black goku\n237/ ID Nhân Vật: 236 -> Name Nhân Vật: taki\n238/ ID Nhân Vật: 237 -> Name Nhân Vật: mitsuha\n<-Số Trang 16/16->\nDùng ${prefix}jgavtlist + < số trang > để xem trang tiếp theo`},event.threadID, event.messageID);
}