const fs = require("fs");
module.exports.config = {
	name: "luatbot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Bảo", 
	description: "no prefix",
	commandCategory: "Luật BOT",
	usages: "Luật BOT",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	const fs = require ("fs-extra")
	if (event.body.indexOf("Luật bot")==0 || (event.body.indexOf("luật bot")==0)) {
		var msg = {
				body: "⚡️MỜI BOT VÀO NHÓM Thì Hãy Bấm Rankup 2 Lần Để Tắt Lên Level Sẽ Hiện Tin Nhắn Thông Báo Và Hãy Bấm Resend 1 LẦN ĐỂ TẮT Tin Nhắn Khi Xóa Sẽ Bị Hồi Phục Đỡ Phải Gỡ Nhé !!!!!\n⚡️⚡️⚡️++++ CHỬI BOT + SPAM BOT + KICK BOT = BAN BOX ++++⚡️⚡️⚡️\n\n⚡️Do sự thiếu hiểu biết của thành viên trong nhóm hoặc do cả quản trị viên cũng đéo có ý thức nên chả ai quản được để thành ra bot bị ăn block tin nhắn hoặc có thể bay acc bot (t bay lần thứ n rồi đấy.-.) hoặc do một số đứa ngu k biết sài bot lại bảo bo.t ng.u thiểu năng và bảo bot dởm(nếu dởm thì kick t ra kiếm bot khác mà sài nhé._.).\n⚡️Thứ 2⚡️\n⚡️Add bot vô box mà không xin phép 🤔 rồi phá bot xong kick bot hãm loz vừa thôi nhé 🐧\n⚡️Thứ 3⚡️\n⚡️Nhiều thành phần có 1,2 lệnh cách 5s spam một lần máy cũng không chịu nổi._.\n⚡️Thứ 4⚡️\n⚡️Có 1 số thành phần bảo dùng máy vippro no 1 ip12prx samsung abcxyz gì đó xong bảo bot vào nhắn tin lag hết cả máy thì t nghĩ nên đi thay máy mới hoặc đập cmn đi .-.\n⚡️Thứ 5⚡️\n⚡️Admin sẽ vào kiểm tra đột xuất nếu box nào dưới 10 người và không có ảnh hoặc tên thì auto out box.\n⚡️Thứ 6⚡️\n⚡️Một box chỉ sài 1 bot thôi nhé nhiều bot dẫn đến loãng box và ảnh hưởng đến các bot phát hiện có 2 bot hoặc bla bla thì out + ban.\n⚡️Thứ 7⚡️\n⚡️Và lần cuối t nói ai sài được bot t thì sài không sài t không ép đừng kiểu thêm vô box rồi chê đủ kiểu bảo bot dởm xong chửi đòi war với bot ._.\n⚡️Chủ nhật⚡️\n📕Hình phạt và luật dành cho bạn📕\n💢-Chửi Bot lần đầu sẽ bị phạt 3 tiếng \n💢-Chửi Bot lần hai sẽ bị phạt 6 tiếng \n💢-Chửi Bot lần Ba sẽ bị phạt 9 tiếng \n💢-Spam Bot lần Bốn sẽ bị phạt 12 tiếng \n💢-Spam Bot lần Năm sẽ bị phạt 24 tiếng\n💢-Spam Bot lần Sáu sẽ bị phạt Vĩnh Viễn!🔥",
				attachment: fs.createReadStream(__dirname + `/noprefix/gif.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}