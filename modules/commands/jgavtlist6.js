module.exports.config = {
	name: "jgavtlist6",
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
api.sendMessage({body:`ĐÂY LÀ DANH SÁCH ID NHÂN VẬT Dành Cho Bạn:\n76/ ID Nhân Vật: 75 -> Name Nhân Vật: nagisa\n77/ ID Nhân Vật: 76 -> Name Nhân Vật: kotori\n78/ ID Nhân Vật: 77 -> Name Nhân Vật: ruby rose\n79/ ID Nhân Vật: 78 -> Name Nhân Vật: gilgamesh\n80/ ID Nhân Vật: 79 -> Name Nhân Vật: yugi\n81/ ID Nhân Vật: 80 -> Name Nhân Vật: kaiba\n82/ ID Nhân Vật: 81 -> Name Nhân Vật: rikka\n83/ ID Nhân Vật: 82 -> Name Nhân Vật: toge inumaki\n84/ ID Nhân Vật: 83 -> Name Nhân Vật: megumi\n85/ ID Nhân Vật: 84 -> Name Nhân Vật: mahito\n86/ ID Nhân Vật: 85 -> Name Nhân Vật: xiao\n87/ ID Nhân Vật: 86 -> Name Nhân Vật: nakano ichika\n88/ ID Nhân Vật: 87 -> Name Nhân Vật: nakano nino\n89/ ID Nhân Vật: 88 -> Name Nhân Vật: nakano miku\n90/ ID Nhân Vật: 89 -> Name Nhân Vật: nakano yotsuba\n<-Số Trang 6/16->\nDùng ${prefix}jgavtlist + < số trang > để xem trang tiếp theo`},event.threadID, event.messageID);
}