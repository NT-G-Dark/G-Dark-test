module.exports.config = {
	name: "jgavtlist7",
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
api.sendMessage({body:`ĐÂY LÀ DANH SÁCH ID NHÂN VẬT Dành Cho Bạn:\n91/ ID Nhân Vật: 90 -> Name Nhân Vật: nakano itsuki\n92/ ID Nhân Vật: 91 -> Name Nhân Vật: bakura ryou\n93/ ID Nhân Vật: 92 -> Name Nhân Vật: marik ishtar\n94/ ID Nhân Vật: 93 -> Name Nhân Vật: kiyotaka ayanokōji\n95/ ID Nhân Vật: 94 -> Name Nhân Vật: inuyasha\n96/ ID Nhân Vật: 95 -> Name Nhân Vật: sistine fibel\n97/ ID Nhân Vật: 96 -> Name Nhân Vật: syalis\n98/ ID Nhân Vật: 97 -> Name Nhân Vật: rei ayanami\n99/ ID Nhân Vật: 98 -> Name Nhân Vật: iruma\n100/ ID Nhân Vật: 99 -> Name Nhân Vật: monika\n101/ ID Nhân Vật: 100 -> Name Nhân Vật: yuri\n102/ ID Nhân Vật: 101 -> Name Nhân Vật: shigeo kageyama\n103/ ID Nhân Vật: 102 -> Name Nhân Vật: elaina\n104/ ID Nhân Vật: 103 -> Name Nhân Vật: mirai\n105/ ID Nhân Vật: 104 -> Name Nhân Vật: umaru\n<-Số Trang 7/16->\nDùng ${prefix}jgavtlist + < số trang > để xem trang tiếp theo`},event.threadID, event.messageID);
}