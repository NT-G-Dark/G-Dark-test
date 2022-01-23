module.exports.config = {
	name: "jgavtlist13",
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
api.sendMessage({body:`ĐÂY LÀ DANH SÁCH ID NHÂN VẬT Dành Cho Bạn:\n181/ ID Nhân Vật: 180 -> Name Nhân Vật: wakabayashi\n182/ ID Nhân Vật: 181 -> Name Nhân Vật: misaki taro\n183/ ID Nhân Vật: 182 -> Name Nhân Vật: oreki\n184/ ID Nhân Vật: 183 -> Name Nhân Vật: chitanda eru\n185/ ID Nhân Vật: 184 -> Name Nhân Vật: chaheain\n186/ ID Nhân Vật: 185 -> Name Nhân Vật: dio\n187/ ID Nhân Vật: 186 -> Name Nhân Vật: jotaro\n188/ ID Nhân Vật: 187 -> Name Nhân Vật: giorno giovanna\n189/ ID Nhân Vật: 188 -> Name Nhân Vật: kanna\n190/ ID Nhân Vật: 189 -> Name Nhân Vật: loli\n191/ ID Nhân Vật: 190 -> Name Nhân Vật: satoru gojo\n192/ ID Nhân Vật: 191 -> Name Nhân Vật: ran\n193/ ID Nhân Vật: 192 -> Name Nhân Vật: shinichi\n194/ ID Nhân Vật: 193 -> Name Nhân Vật: kaito kid\n195/ ID Nhân Vật: 194 -> Name Nhân Vật: luffy\n<-Số Trang 13/16->\nDùng ${prefix}jgavtlist + < số trang > để xem trang tiếp theo`},event.threadID, event.messageID);
}