module.exports.config = {
	name: "jgavtlist12",
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
api.sendMessage({body:`ĐÂY LÀ DANH SÁCH ID NHÂN VẬT Dành Cho Bạn:\n166/ ID Nhân Vật: 165 -> Name Nhân Vật: erza\n167/ ID Nhân Vật: 166 -> Name Nhân Vật: mirajane\n168/ ID Nhân Vật: 167 -> Name Nhân Vật: brandish\n169/ ID Nhân Vật: 168 -> Name Nhân Vật: zeref\n170/ ID Nhân Vật: 169 -> Name Nhân Vật: laxus\n171/ ID Nhân Vật: 170 -> Name Nhân Vật: sting eucliffe\n172/ ID Nhân Vật: 171 -> Name Nhân Vật: wendy\n173/ ID Nhân Vật: 172 -> Name Nhân Vật: gajeel\n174/ ID Nhân Vật: 173 -> Name Nhân Vật: kirito\n175/ ID Nhân Vật: 174 -> Name Nhân Vật: asuna\n176/ ID Nhân Vật: 175 -> Name Nhân Vật: kaori\n177/ ID Nhân Vật: 176 -> Name Nhân Vật: gura\n178/ ID Nhân Vật: 177 -> Name Nhân Vật: bakugou\n179/ ID Nhân Vật: 178 -> Name Nhân Vật: sungjinwoo\n180/ ID Nhân Vật: 179 -> Name Nhân Vật: tsubasa\n<-Số Trang 12/16->\nDùng ${prefix}jgavtlist + < số trang > để xem trang tiếp theo`},event.threadID, event.messageID);
}