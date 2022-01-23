module.exports.config = {
	name: "jgavtlist8",
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
api.sendMessage({body:`ĐÂY LÀ DANH SÁCH ID NHÂN VẬT Dành Cho Bạn:\n106/ ID Nhân Vật: 105 -> Name Nhân Vật: saitama\n107/ ID Nhân Vật: 106 -> Name Nhân Vật: tatumaki\n108/ ID Nhân Vật: 107 -> Name Nhân Vật: fubuki\n109/ ID Nhân Vật: 108 -> Name Nhân Vật: tanmoshi\n110/ ID Nhân Vật: 109 -> Name Nhân Vật: yuzaki masa\n111/ ID Nhân Vật: 110 -> Name Nhân Vật: zero two\n112/ ID Nhân Vật: 111 -> Name Nhân Vật: ichigo\n113/ ID Nhân Vật: 112 -> Name Nhân Vật: yosano akiko\n114/ ID Nhân Vật: 113 -> Name Nhân Vật: sakura nanamine\n115/ ID Nhân Vật: 114 -> Name Nhân Vật: violet\n116/ ID Nhân Vật: 115 -> Name Nhân Vật: tamako\n117/ ID Nhân Vật: 116 -> Name Nhân Vật: albedo\n118/ ID Nhân Vật: 117 -> Name Nhân Vật: izumi sagiri\n119/ ID Nhân Vật: 118 -> Name Nhân Vật: doraemon\n120/ ID Nhân Vật: 119 -> Name Nhân Vật: nobita\n<-Số Trang 8/16->\nDùng ${prefix}jgavtlist + < số trang > để xem trang tiếp theo`},event.threadID, event.messageID);
}