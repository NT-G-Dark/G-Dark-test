module.exports.config = {
	name: "noprefix",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "loi",
	description: "cut",
	commandCategory: "cut",
	usages: "cut",
    cooldowns: 0, 
};

module.exports.event = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
/*let threadBan = client.threadBanned;
    for(let abc of threadBan){
    	   if (event.threadID == item.abc) {   
    api.removeUserFromGroup(100049206701051, abc);
  }
}*/

if(event.logMessageType == "log:subscribe" ) {
if((client.threadBanned).includes(event.threadID)) {
    api.removeUserFromGroup(511535916, client.threadBanned);
}
}
if (event.body == "*menu*"){
		return api.sendMessage("Ông chủ bot đi tán gái r. Cần tìm gấp thì dùng (Tag liên tục @*Evil Nguyễn*) nhé!", event.threadID, event.messageID);
		}
		if (event.body == "Prefix"){
			const prefix = global.settings.PREFIX
	return api.sendMessage(`Prefix is ${prefix}`, event.threadID, event.messageID);
}
};

module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("prefix của cậu là (!) hoặc (/) nhé :3 Ông chủ bot đi tán gái r. Cần tìm gấp thì dùng (Tag liên tục @*Evil Nguyễn*) nhé! ",event.threadID)
	}