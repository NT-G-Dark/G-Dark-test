module.exports.config = {
	name: "jgavtlist2",
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
api.sendMessage({body:`ĐÂY LÀ DANH SÁCH ID NHÂN VẬT Dành Cho Bạn:\n16/ ID Nhân Vật: 15 -> Name Nhân Vật: runa\n17/ ID Nhân Vật: 16 -> Name Nhân Vật: gintoki\n18/ ID Nhân Vật: 17 -> Name Nhân Vật: raphtalia\n19/ ID Nhân Vật: 18 -> Name Nhân Vật: sukuna\n20/ ID Nhân Vật: 19 -> Name Nhân Vật: nanami\n21/ ID Nhân Vật: 20 -> Name Nhân Vật: ai ohto\n22/ ID Nhân Vật: 21 -> Name Nhân Vật: mona\n23/ ID Nhân Vật: 22 -> Name Nhân Vật: lisa\n24/ ID Nhân Vật: 23 -> Name Nhân Vật: keqing\n25/ ID Nhân Vật: 24 -> Name Nhân Vật: fischl\n26/ ID Nhân Vật: 25 -> Name Nhân Vật: jean\n27/ ID Nhân Vật: 26 -> Name Nhân Vật: ganyu\n28/ ID Nhân Vật: 27 -> Name Nhân Vật: raiden shogun\n29/ ID Nhân Vật: 28 -> Name Nhân Vật: qiqi trinh\n30/ ID Nhân Vật: 29 -> Name Nhân Vật: ayaka\n<-Số Trang 2/16->\nDùng ${prefix}jgavtlist + < số trang > để xem trang tiếp theo`},event.threadID, event.messageID);
}