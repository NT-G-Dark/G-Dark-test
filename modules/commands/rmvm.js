/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

module.exports.config = {
    name: "rmvm",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ProCoderMew",
    description: "Gỡ tin nhắn bằng cách thả cảm xúc được chỉ định hoặc bất kỳ.",
    commandCategory: "other",
    usages: "",
    cooldowns: 5,
    envConfig: {
        react: ""
    }
};

module.exports.handleEvent = function ({ api, event }) {
    const { senderID, type, reaction, messageID } = event;
    const { react } = global.configModule.reactToRemoveMsg;
    const { react: React } = this.config.envConfig;
    if (type == "message_reaction" && senderID == api.getCurrentUserID()) {
        if (React == react || React == "" || React == reaction) return api.unsendMessage(messageID);
    }
}
module.exports.run = () => !0;
