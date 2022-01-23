module.exports.config = {
	name: "demngayyeu",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Hoài Bảo",
	description: "Đếm ngược tới ngày tròn 1 tháng yêu nhau",
	commandCategory: "other",
	cooldowns: 5
}

module.exports.run = async function ({ event, api, args, Users, Threads, Currencies }) {
    const t = Date.parse("October 2, 2021 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );
	const axios = global.nodemodule["axios"];
	const fs = global.nodemodule["fs-extra"];
	var mention = Object.keys(event.mentions)[0];
	const na = await Users.getNameUser(mention);
	let getdata = (await axios.get(`https://imgur.com/zkppGxp.gif`, { responseType: 'arraybuffer' })).data;
	fs.writeFileSync( __dirname + '/cache/happy.gif', Buffer.from(getdata, 'utf-8'));
		return api.sendMessage({body:`「Sắp tới ngày tròn 1 tháng yêu nhau rồi đóoooooo <3」\n» ${days} ngày ${hours} tiếng ${minutes} phút ${seconds} giây «\n\nEm à, vậy là hôm nay là tròn 1 tháng hai đứa mình yêu nhau rồi đấy,\nAnh có những lời này muốn nói với Em…\nCó người từng nói khoảng thời gian đẹp nhất của con gái chính là thanh xuân,\nCũng như khoảng thời gian đẹp nhất của tình yêu chính là lúc có được 1 ai đó theo đuổi.\nThật may mắn vì thanh xuân ấy có Em Luôn bên Anh,\ncảm ơn anh đã luôn bên Anh💗.\nAnh Yêu Em Người Con Gái Anh Thương 💕`, attachment: fs.createReadStream( __dirname + '/cache/happy.gif')}, event.threadID, event.messageID);
}

