module.exports.config = {
	name: "jgavtlist4",
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
api.sendMessage({body:`ĐÂY LÀ DANH SÁCH ID NHÂN VẬT Dành Cho Bạn:\n46/ ID Nhân Vật: 45 -> Name Nhân Vật: tanjiro\n47/ ID Nhân Vật: 46 -> Name Nhân Vật: nezuko\n48/ ID Nhân Vật: 47 -> Name Nhân Vật: zenitsu\n49/ ID Nhân Vật: 48 -> Name Nhân Vật: inosuke\n50/ ID Nhân Vật: 49 -> Name Nhân Vật: yoriichi\n51/ ID Nhân Vật: 50 -> Name Nhân Vật: kokushibou\n52/ ID Nhân Vật: 51 -> Name Nhân Vật: giyuu\n53/ ID Nhân Vật: 52 -> Name Nhân Vật: shinobu\n54/ ID Nhân Vật: 53 -> Name Nhân Vật: muichirou\n55/ ID Nhân Vật: 54 -> Name Nhân Vật: sabito\n56/ ID Nhân Vật: 55 -> Name Nhân Vật: makomo\n57/ ID Nhân Vật: 56 -> Name Nhân Vật: rengoku\n58/ ID Nhân Vật: 57 -> Name Nhân Vật: akaza\n59/ ID Nhân Vật: 58 -> Name Nhân Vật: takemichi\n60/ ID Nhân Vật: 59 -> Name Nhân Vật: hina\n<-Số Trang 4/16->\nDùng ${prefix}jgavtlist + < số trang > để xem trang tiếp theo`},event.threadID, event.messageID);
}