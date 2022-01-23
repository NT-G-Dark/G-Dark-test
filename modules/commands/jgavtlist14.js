module.exports.config = {
	name: "jgavtlist14",
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
api.sendMessage({body:`ĐÂY LÀ DANH SÁCH ID NHÂN VẬT Dành Cho Bạn:\n196/ ID Nhân Vật: 195 -> Name Nhân Vật: zoro\n197/ ID Nhân Vật: 196 -> Name Nhân Vật: sanji\n198/ ID Nhân Vật: 197 -> Name Nhân Vật: ace\n199/ ID Nhân Vật: 198 -> Name Nhân Vật: nico\n200/ ID Nhân Vật: 199 -> Name Nhân Vật: doflamingo\n201/ ID Nhân Vật: 200 -> Name Nhân Vật: nami\n202/ ID Nhân Vật: 201 -> Name Nhân Vật: shanks\n203/ ID Nhân Vật: 202 -> Name Nhân Vật: trafalgar law\n204/ ID Nhân Vật: 203 -> Name Nhân Vật: naruto\n205/ ID Nhân Vật: 204 -> Name Nhân Vật: sasuke\n206/ ID Nhân Vật: 205 -> Name Nhân Vật: kakashi\n207/ ID Nhân Vật: 206 -> Name Nhân Vật: sakura\n208/ ID Nhân Vật: 207 -> Name Nhân Vật: tusnade\n209/ ID Nhân Vật: 208 -> Name Nhân Vật: yahiko\n210/ ID Nhân Vật: 209 -> Name Nhân Vật: nagato\n<-Số Trang 14/16->\nDùng ${prefix}jgavtlist + < số trang > để xem trang tiếp theo`},event.threadID, event.messageID);
}