module.exports.config = {
	name: "autoban",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "NTKhang",
	description: "tự động cấm người dùng nếu spam bot 10 lần/phút",
	commandCategory: "system",
	usages: "x",
	cooldowns: 5
};

module.exports.run = ({api, event}) => {
  return api.sendMessage("tự động cấm người dùng nếu spam bot 5 lần/phút", event.threadID, event.messageID);
};

module.exports.handleEvent = async ({ Users, api, event}) => {
  let { senderID, messageID, threadID } = event;
  
  if (!global.client.autoban) global.client.autoban = {};
  
  if (!global.client.autoban[senderID]) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  };
  
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = threadSetting.PREFIX || global.config.PREFIX;
	if (!event.body || event.body.indexOf(prefix) != 0) return;
	
	if ((global.client.autoban[senderID].timeStart + 60000) <= Date.now()) {
	  global.client.autoban[senderID] = {
	    timeStart: Date.now(),
	    number: 0
	  }
	}
	else {
	  global.client.autoban[senderID].number++;
	  if (global.client.autoban[senderID].number >= 5) {
	    const moment = require("moment-timezone");
	    const time = moment.tz("Asia/Ho_Chi_minh").format("HH:mm:ss");
	    const timeDate = moment.tz("Asia/Ho_Chi_minh").format("DD/MM/YYYY HH:mm:ss");
			let dataUser = await Users.getData(senderID) || {};
			let data = dataUser.data || {};
			if (data && data.banned == true) return;
			data.banned = true;
			data.reason = null;
			data.dateAdded = time;
			await Users.setData(senderID, { data });
			global.data.userBanned.set(senderID, { reason: data.reason, dateAdded: data.dateAdded });
			global.client.autoban[senderID] = {
	      timeStart: Date.now(),
	      number: 0
	    };
		api.sendMessage(senderID + " | " + dataUser.name + "\n🚨-Bạn đã bị cấm sử dụng với lý do: spam bot 5 lần/phút🚫\n📣-Vì hành vi SPAM BOT quá nhiều nên ADMIN quyết định update AUTOBAN \n💢-Bạn đã bị ban vì sử dụng BOT quá nhanh nên sẽ bị quy vào tội SPAM BOT \n💢-Vui lòng liên hệ ADMIN để gỡ ban \n💌-https://www.facebook.com/DevilNguyenSadBoy \n📕Hình phạt và luật dành cho bạn📕\n💢-Spam lần đầu sẽ bị phạt 3 tiếng \n💢-Spam lần hai sẽ bị phạt 6 tiếng \n💢-Spam lần Ba sẽ bị phạt 9 tiếng \n💢-Spam lần Bốn sẽ bị phạt 12 tiếng \n💢-Spam lần Năm sẽ bị phạt 24 tiếng\n💢-Spam lần Sáu sẽ bị phạt Vĩnh Viễn\n💢-Để hạng chế acc die và tránh lạm dụng quyền SPAM BOT nên ADMIN làm gắt chuyện này mong mn thông cảm ạ", threadID);
		api.sendMessage("Đã kích hoạt autoban người dùng " + senderID + " | " + dataUser.name + " vì spam bot 5 lần/phút\nThời gian: " + timeDate, "100056831031407");
	  }
	}
};
//gửi 1 admin (sửa "000000000000" thành id của admin muốn nhận tin nhắn )