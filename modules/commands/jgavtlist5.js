module.exports.config = {
	name: "jgavtlist5",
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
api.sendMessage({body:`ĐÂY LÀ DANH SÁCH ID NHÂN VẬT Dành Cho Bạn:\n61/ ID Nhân Vật: 60 -> Name Nhân Vật: mikey\n62/ ID Nhân Vật: 61 -> Name Nhân Vật: emma\n63/ ID Nhân Vật: 62 -> Name Nhân Vật: draken\n64/ ID Nhân Vật: 63 -> Name Nhân Vật: kisaki\n65/ ID Nhân Vật: 64 -> Name Nhân Vật: chifuyu\n66/ ID Nhân Vật: 65 -> Name Nhân Vật: mitsuya\n67/ ID Nhân Vật: 66 -> Name Nhân Vật: baji\n68/ ID Nhân Vật: 67 -> Name Nhân Vật: haitani ran\n69/ ID Nhân Vật: 68 -> Name Nhân Vật: haitani rindou\n70/ ID Nhân Vật: 69 -> Name Nhân Vật: kawaragi senju\n71/ ID Nhân Vật: 70 -> Name Nhân Vật: izana kurokawa\n72/ ID Nhân Vật: 71 -> Name Nhân Vật: kazutora\n73/ ID Nhân Vật: 72 -> Name Nhân Vật: hanma\n74/ ID Nhân Vật: 73 -> Name Nhân Vật: imaushi\n75/ ID Nhân Vật: 74 -> Name Nhân Vật: karma\n<-Số Trang 5/16->\nDùng ${prefix}jgavtlist + < số trang > để xem trang tiếp theo`},event.threadID, event.messageID);
}