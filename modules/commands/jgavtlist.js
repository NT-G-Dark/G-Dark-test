module.exports.config = {
	name: "jgavtlist",
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
api.sendMessage({body:`ĐÂY LÀ DANH SÁCH ID NHÂN VẬT Dành Cho Bạn:\n1/ ID Nhân Vật: 0 -> Name Nhân Vật: hy tomboy\n2/ ID Nhân Vật: 1 -> Name Nhân Vật: yato\n3/ ID Nhân Vật: 2 -> Name Nhân Vật: yuu otosaka\n4/ ID Nhân Vật: 3 -> Name Nhân Vật: mizuhara chizuru\n5/ ID Nhân Vật: 4 -> Name Nhân Vật: nanami mami\n6/ ID Nhân Vật: 5 -> Name Nhân Vật: sarashina ruka\n7/ ID Nhân Vật: 6 -> Name Nhân Vật: sakurasawa sumi\n8/ ID Nhân Vật: 7 -> Name Nhân Vật: kaneki ken\n9/ ID Nhân Vật: 8 -> Name Nhân Vật: juuzo\n10/ ID Nhân Vật: 9 -> Name Nhân Vật: yamauchi sakura\n11/ ID Nhân Vật: 10 -> Name Nhân Vật: rem\n12/ ID Nhân Vật: 11 -> Name Nhân Vật: emilia\n13/ ID Nhân Vật: 12 -> Name Nhân Vật: raiden mei herrscher\n14/ ID Nhân Vật: 13 -> Name Nhân Vật: raiden mei\n15/ ID Nhân Vật: 14 -> Name Nhân Vật: koro sensei\n<-Số Trang 1/16->\nDùng ${prefix}jgavtlist + < số trang > + vd prefix ${prefix}jgavtlist2 để xem trang tiếp theo`},event.threadID, event.messageID);
}