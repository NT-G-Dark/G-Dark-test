module.exports.config = {
	name: "jgavtlist11",
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
api.sendMessage({body:`ĐÂY LÀ DANH SÁCH ID NHÂN VẬT Dành Cho Bạn:\n151/ ID Nhân Vật: 150 -> Name Nhân Vật: rimuru\n152/ ID Nhân Vật: 151 -> Name Nhân Vật: tsukishima\n153/ ID Nhân Vật: 152 -> Name Nhân Vật: hinata\n154/ ID Nhân Vật: 153 -> Name Nhân Vật: kageyama tobio\n155/ ID Nhân Vật: 154 -> Name Nhân Vật: tanaka\n156/ ID Nhân Vật: 155 -> Name Nhân Vật: oikawa tooru\n157/ ID Nhân Vật: 156 -> Name Nhân Vật: uzaki\n158/ ID Nhân Vật: 157 -> Name Nhân Vật: todoroki\n159/ ID Nhân Vật: 158 -> Name Nhân Vật: levi\n160/ ID Nhân Vật: 159 -> Name Nhân Vật: eren\n161/ ID Nhân Vật: 160 -> Name Nhân Vật: mikasa\n162/ ID Nhân Vật: 161 -> Name Nhân Vật: hanji zoe\n163/ ID Nhân Vật: 162 -> Name Nhân Vật: natsu\n164/ ID Nhân Vật: 163 -> Name Nhân Vật: lucy\n165/ ID Nhân Vật: 164 -> Name Nhân Vật: gray\n<-Số Trang 11/16->\nDùng ${prefix}jgavtlist + < số trang > để xem trang tiếp theo`},event.threadID, event.messageID);
}