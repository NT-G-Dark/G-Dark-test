module.exports.config = {
    name: "traidat",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Trung Kiên",
    description: "",
    commandCategory: "Other",
    usages: "",
    cooldowns: 5,
    dependencies: {
      "request":"",
      "fs-extra":"",
      "axios":""
    }
      
  };
  
  module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.postimg.cc/X7MNzCCj/apollo-17-earth-from-space-photo-print-18.jpg",
    ];
    var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
    var data = await Currencies.getData(event.senderID);
    var exp =  data.exp;
    var money = data.money
        if(money < 0) api.sendMessage("",event.threadID,event.messageID)
            else {
     Currencies.setData(event.senderID, options = {money: money - 0})
     var callback = () => api.sendMessage({body:`Trái Đất\nTrái Đất hay Địa Cầu (地球), là hành tinh thứ ba tính từ Mặt Trời, đồng thời cũng là hành tinh lớn nhất trong các hành tinh đất đá của hệ Mặt Trời xét về bán kính, khối lượng và mật độ vật chất. Trái Đất còn được biết tên với các tên gọi "hành tinh xanh", là nhà của hàng triệu loài sinh vật, trong đó có con người và cho đến nay đây là nơi duy nhất trong vũ trụ được biết đến là có sự sống. Hành tinh này được hình thành cách đây 4,55 tỷ năm và sự sống xuất hiện trên bề mặt của nó khoảng 1 tỷ năm trước. Kể từ đó, sinh quyển, bầu khí quyển của Trái Đất và các điều kiện vô cơ khác đã thay đổi đáng kể, tạo điều kiện thuận lợi cho sự phổ biến của các vi sinh vật ưa khí cũng như sự hình thành của tầng ôzôn-lớp bảo vệ quan trọng, cùng với từ trường của Trái Đất, đã ngăn chặn các bức xạ có hại và chở che cho sự sống. Các đặc điểm vật lý của Trái Đất cũng như lịch sử địa lý hay quỹ đạo, cho phép sự sống tồn tại trong thời gian qua. Người ta ước tính rằng Trái Đất chỉ còn có thể hỗ trợ sự sống thêm 1,5 tỷ năm nữa, trước khi kích thước của Mặt Trời tăng lên và tiêu diệt hết sự sống\nDân số:7 triệu\nBán kính:6339.90 km\nKhối lượng:5972.37 Yg\nĐường kính:12742 km\nDiện tích:510.07 triệu kilômét vuông\nChu vi:24901 dặm Anh`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
        return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
       }
     };
  