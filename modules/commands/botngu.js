module.exports.config = {
    name: "Botngu",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "ProCoderMew",
    description: "Nói bot ngu di",
    commandCategory: "noprefix",
    usages: "",
    cooldowns: 0
};

module.exports.handleEvent = ({ event, api }) => (event.body.toLowerCase() == "bot ngu") ? api.sendMessage("chửi = auto ban đéo nới nhiều :)", event.threadID, () => 
            global.data.userBanned.set(parseInt(event.senderID), 1)) :' ';
module.exports.run = () => {}