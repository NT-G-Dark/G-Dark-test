const fs = require("fs");
module.exports.config = {
  name: "12cunghoangdao",
version: "1.0.1",
 hasPermssion: 0,
 credits: "Long LTD", 
 description: "no prefix",
 commandCategory: "Không cần dấu lệnh",
 usages: "12 cung hoàng đạo",
    cooldowns: 5, 
};

module.exports.handleReply = async function({ api, event, handleReply }) {
 console.log("đít bự");
 switch(event.body){
  case "1":
   api.sendMessage({
    body: "1. Bạch Dương ♈\n\nCung Bạch Dương hay có tên gọi khác là Dương cưu, đây là cung đầu tiên trong 12 cung hoàng đạo nằm giữa độ thứ 0 và 30 của kinh độ thiên thể. Những người thuộc chiêm tinh này sinh ngày từ 21/3 – 19/4. Biểu tượng cho cung này là con cừu đực có bộ lông vàng. Bạch Dương thuộc nguyên tố Lửa (cùng với Sư Tử và Nhân Mã) và là một trong bốn cung Thống lĩnh (cùng với Thiên Bình, Ma Kết và Cự Giải). Sao chiếu mệnh là Hỏa Tinh (chiếu mệnh chính) và Diêm Vương Tinh (chiếu mệnh phụ); chịu sự ảnh hưởng mạnh mẽ từ Mặt Trời. Cung bạch dương tiếng anh là: Aries.\nChòm sao:Bạch dương\nBiểu tượng hoàng đạo: Con cừu\nYếu tố: Lửa\nHợp màu sắc: Màu đỏ\nCung hoàng đạo tương thích nhất: Thiên Bình, Sư Tử\nSố may mắn: 1, 8, 17\nNgày sinh từ: 21 tháng 3 – 19 tháng 4", 
    attachment: fs.createReadStream(__dirname + `/cache/bachduong.jpg`)
   }, event.threadID, event.messageID);
   break;
case "2":
   api.sendMessage({
    body: "\n2. Kim ♉\n\nNó là một trong 4 cung Cố định (cùng với Sư Tử, Bảo Bình và Thiên Yết) và là một trong 3 cung thuộc nguyên tố Đất (cùng với Ma Kết và Xử Nữ). Những người sinh ra trong những ngày này, khi Mặt Trời đang ở trong cung này, được gọi là Taurus (Những người sinh cung Kim Ngưu). Cung Kim Ngưu được Sao Kim chiếu mệnh. Cung Kim Ngưu tiếng anh là: Taurus.\nChòm sao: Kim Ngưu\nBiểu tượng hoàng đạo: Con bò vàng\nYếu tố: Trái đấtThích màu sắc: Xanh, Hồng\nCung hoàng đạo tương thích nhất: Hổ Cáp, Cự Giải\nSố may mắn: 2, 6, 9, 12, 24\nNgày sinh: 20 tháng 4 – 20 tháng 5", 
    attachment: fs.createReadStream(__dirname + `/cache/kimnguu.jpg`)
   }, event.threadID, event.messageID);
   break;
  case "3":
   api.sendMessage({
    body: "3. Song tử♊\n\nNhững người thuộc Cung Song Tử được sinh vào ngày 21 tháng 5 – 20 tháng 6, có biểu tượng là 2 anh em Song Sinh (Hay còn gọi là Song Nam). Đây là chòm sao thứ 3 trong 12 cung Hoàng Đạo, họ là những người dễ dàng thích nghi và hòa nhập với môi trường mới, chính vì thế họ khá dễ tính, có khiếu hài hước và thích giao lưu. Cung Song Tử tiếng anh là Gemini.\nChòm sao: Song Tử\nBiểu tượng hoàng đạo: Hai anh em song sinh\nYếu tố: Không khí\nMàu sắc: Xanh nhạt, Vàng\nCung hoàng đạo tương thích nhất: Nhân mã, Bảo bình\nCon số may mắn: 5, 7, 14, 23\nSinh ngày: 21 tháng 5 – 20 tháng 6", 
    attachment: fs.createReadStream(__dirname + `/cache/songtu.jpg`)
   }, event.threadID, event.messageID); 
   break;
  case "4":
   api.sendMessage({
    body: "4. Cự giải♋ \n\nChòm sao Cự Giải có biểu tượng là Con Cua, đây là cung đầu tiên của nguyên tố Nước (cùng với Thiên Yết và Song Ngư) và là 1 trong 4 chòm sao Thống lĩnh (cùng với Bạch Dương, Thiên Bình và Ma Kết). Những người thuộc Cự Giải sinh vào ngày: 22/6 – 22/7,  họ là những người Khéo léo, hài hước, thuyết phục, tính cách của họ mềm mại, nhẹ nhàng như nước nhưng cũng có phần mạnh mẽ, cứng cáp như lớp vỏ cua. Cung Cự Giải tiếng anh là: Cancer.\nTên Latinh: Cancer\nYếu tố: Nước\nMàu sắc: trắng\nCung hoàng đạo tương thích nhất: Ma kết, Kim ngưu\nCon số may mắn: 2, 3, 15, 20\nNgày: 21 tháng 6 – 22 tháng 7", 
    attachment: fs.createReadStream(__dirname + `/cache/cugiai.jpg`)
   }, event.threadID, event.messageID); 
   break;
  case "5":
   api.sendMessage({
    body: "5. Sư tử ♌\n\nCung Sư Tử hay có tên gọi khác là Hải Sư, có biểu tượng là con sư tử, đây là cung thứ 5 trong 12 cung hoàng đạo của chiêm tinh Tây phương. Những người sinh vào 23 tháng 7 – 22 tháng 8, và có tính cách nổi bật: sáng tạo, hùng dũng và hấp dẫn là đặc điểm của người thuộc cung Sư Tử. Trong 12 cung hoàng đạo, thì Sư Tử được đánh giá là chòm sao hào phóng nhất. Cung Sư Tử tiếng anh là Leo.\nTên Latinh: Leo\nBiểu tượng: Sư Tử\nYếu tố: Lửa\nMàu sắc: Vàng, Vàng, Cam\nCung hoàng đạo tương thích nhất: Bảo Bình, Song Tử\nCon số may mắn: 1, 3, 10, 19\nNgày: 23 tháng 7 – 22 tháng 8", 
    attachment: fs.createReadStream(__dirname + `/cache/sutu.jpg`)
   }, event.threadID, event.messageID); 
   break;
  case "6":
   api.sendMessage({
    body: "6. Xử nữ♍\n\nCung hoàng đạo Xử Nữ hay còn được gọi là Trinh Nữ, có biểu tượng một cô trinh nữ, đây là cung thứ 6 trong 12 chiêm tinh. Những người thuộc cung Xử Nữ sinh vào ngày 23/8 – 22/9. Điểm nổi bật của Xử Nữ là họ cả thanh xuân để quan tâm người khác và khắt khe với bản thân trước khi định làm điều gì. Xử Nữ chú ý đến từng chi tiết nhỏ nhất, vì lo lắng rằng họ sẽ phạm phải sai lầm nào đó, chính vì vậy mọi thứ trở nên quá quan trọng. Họ sẽ là người rất tuyệt vời, nếu họ điều tiết được những điều này. Cung Xử Nữ tiếng anh là Virgo.", 
    attachment: fs.createReadStream(__dirname + `/cache/xunu.jpg`)
   }, event.threadID, event.messageID); 
   break;
  case "7":
   api.sendMessage({
    body: "7.Thiên bình♎\n\nCung Thiên Bình có tên khác là Thiên Xứng, đây là một cung trong 12 cung hoàng đạo tương ứng với chòm sao Thiên Bình, bao gồm những người sinh trong khoảng (22 tháng 9 – 23 tháng 10), biểu tượng của Thiên Bình là hình cái cân. Biểu tượng này tượng trưng cho hình ảnh của cán cân công lý, sự thẳng thắn, minh bạch và công bằng. Tính cách của người thuộc cung hoàng đạo Thiên Bình này thường tích cực, đáng tin cậy, lạc quan, cứng rắn và có tinh thần hướng ngoại; thuộc yếu tố không khí và là một trong 4 cung chính trong các cung, đây là những đặc điểm nổi bật của cung thiên bình. Cung Thiên Bình tiếng anh là: Libra.\nTên Latinh: Libra\nYếu tố: Không khí\nMàu sắc: Hồng, Xanh lá\nCung hoàng đạo tương thích nhất: Bạch Dương, Nhân Mã\nCon số may mắn: 4, 6, 13, 15, 24\nNgày: 23 tháng 9 – 22 tháng 10", 
    attachment: fs.createReadStream(__dirname + `/cache/thienbinh.jpg`)
   }, event.threadID, event.messageID); 
   break;
  case "8":
   api.sendMessage({
    body: "8. Thiên yết ( bò cạp )♏\n\nCung Bọ Cạp hay có tên gọi khác là Thiên Yết, Thần Nông, Thiên Hạt, hay Hổ Cáp, những người thuộc chòm sao này sinh vào ngày 23/10 – 21/11, đây là cung hoàng đạo đứng thứ 8 trong 12 cung hoàng đạo, thuộc nguyên tố nước. Những người nằm trong cung chiêm tinh này có vẻ ngoài thu hút, lạnh lùng, cùng với tính cách quyết đoán, mạnh mẽ và nội tâm phức tạp. Cung hoàng đạo Bọ Cạp tiếng anh là: Scorpius.", 
    attachment: fs.createReadStream(__dirname + `/cache/thienyet.jpg`)
   }, event.threadID, event.messageID); 
   break;
  case "9":
   api.sendMessage({
    body: "9. Nhân mã♐\n\nCung Nhân Mã hay được biết tới với tên khác là Cung Thủ hay Xạ Thủ , tên Latinh: Sagittarius, biểu tượng là hình một mũi tên, là một trong mười hai chòm sao hoàng đạo, nằm giữa chòm Thiên Yết về phía tây và chòm Ma Kết về phía đông. Đây là một chòm sao hoàng đạo nên có thể quan sát các hành tinh và Mặt Trăng trong chòm sao này. Cung hoàng đạo này thuộc nguyên tố lửa. Vì vậy, họ luôn mang trong mình ngọn lửa đam mê, nhiệt huyết. Nhắc đến Nhân Mã người ta sẽ nghĩ ngay đến một người có tính cách hòa đồng, thân thiện, có khiếu hài hước. Đặc biệt, họ có trí thông minh và tầm nhìn xa trông rộng khiến người khác phải kinh ngạc. Cung Nhân Mã tiếng anh là: Sagittarius.\nYếu tố: Lửa\nMàu sắc: Xanh lam\nCung hoàng đạo tương thích nhất: Song Tử, Bạch Dương.\nCon số may mắn: 3, 7, 9, 12, 21.\nNgày: 22 tháng 11 – 21 tháng 12", 
    attachment: fs.createReadStream(__dirname + `/cache/nhanma.jpg`)
   }, event.threadID, event.messageID); 
   break;
  case "10":
   api.sendMessage({
    body: "10. Mà kết♑\n\nCung Ma Kết hay còn gọi là Nam Dương, là những người sinh ngày 22-12 đến 19-1, tiếng Latinh Capricornus, thuộc nguyên tố đất, biểu tượng là một trong mười hai chòm sao hoàng đạo, là cung thứ 10 trong vòng tròn 12 cung hoàng đạo nằm phía tây đối với chòm sao Nhân Mã, phía đông nam đối với chòm sao Bảo Bình, là một trong 48 chòm sao Ptolemy. Ba đặc tính nổi bật của cung hoàng đạo Ma Kết: kín đáo, có tham vọng và trách nhiệm. Sao thổ chiếu mệnh nên Ma Kết mang trong mình tính cần mẫn, trách nhiệm, trí thông minh, tư duy logic. Ma Kết xu hướng ép mình vào những khuôn khổ nguyên tắc. Cuộc sống của Ma Kết luôn song hành cùng với những kế hoạch chắc chắn. Chòm sao này được gọi bằng các tên Ma Kết, Kết Toà, Sơn Dương Tòa, Nam Dương. Cung Ma Kết tiếng anh là Capricorn.\nYếu tố: Trái đất.\nMàu sắc: Nâu, Đen.\nCung hoàng đạo tương thích nhất: Kim Ngưu, Cự Giải.\nCon số may mắn: 4, 8, 13, 22\nNgày: 22 tháng 12 – 19 tháng 1", 
    attachment: fs.createReadStream(__dirname + `/cache/maket.jpg`)
   }, event.threadID, event.messageID); 
   break;
  case "11":
   api.sendMessage({
    body: "11. Bảo Bình♒\nCung Bảo Bình hay có tên gọi khác là Thủy Bình, Bảo Bình Tòa, đây là cung thứ 11 trong hoàng đạo, có biểu tượng là người mang nước. Người Bảo Bình mang trong mình sức hút bí ẩn khiến các cung hoàng đạo các thu hút và tò mò. Một người thông minh, sáng tạo, ý chí kiên cường. Nhưng đôi khi lại có những suy nghĩ và hành động khá kỳ quặc, khó hiểu. Đối với người khác họ luôn giữ cho mình nét bí ẩn. Chòm sao Bảo Bình có tên tiếng anh là: Aquarius.", 
    attachment: fs.createReadStream(__dirname + `/cache/baobinh.jpg`)
   }, event.threadID, event.messageID); 
   break;
  case "12":
   api.sendMessage({
    body: "12. Cung song tử (song ngư)♊\nMung Song Ngư là cung thứ 12 trong hoàng đạo, biểu tượng là con cá, thuộc nguyên tố Nước. Đây cà cung hoàng đạo cuối cùng nên Song Ngư hội tụ nhiều tính cách khác nhau của các cung hoàng đạo trước. Một người có ôn nhu, nhẹ nhàng như mặt mặt hồ phẳng lặng nhưng nội tâm lại giữ dội như những cơn sóng. Mang trong mình khả năng sáng tạo tuyệt vời cùng với tâm hồn mộng mơ Tiểu Ngư luôn có những ý tưởng nghe thì vô lý nhưng lại rất thuyết phục. Cung Song Ngư tiếng anh là Pisces.\nMàu sắc: Mauve, Lilac, Purple, Violet, Sea green.\nCung hoàng đạo tương thích nhất: Xử Nữ, Kim Ngưu", 
    attachment: fs.createReadStream(__dirname + `/cache/songtu.jpg`)
   }, event.threadID, event.messageID); 
   break;
   case "13":
   api.sendMessage({
    body: "\n2. Xà phu⛎(30/11-17/12)\nTheo đó, người Babylon cổ đại đã cố ý bỏ qua sự hiện diện của chòm sao Xà Phu trên bầu trời, nhằm chia đều 12 chòm sao bắt đầu từ Bạch Dương cho đến Song Ngư theo bộ lịch 12 tháng của họ, tạo thành vòng tròn 12 cung hoàng đạo như chúng ta đang biết và sử dụng người thuộc cung này\nCung Xà Phu có nghĩa là “người mang rắn”, nó đã có hình ảnh minh họa từ thời xa xưa phác học một người đàn ông cường tráng giữ con rắn khổng lồ anaconda hướng lên bầu trời. Cung Xà Phu được xem là cung duy nhất có thể liên hệ hình ảnh với nhân loại, và có chung đặc điểm với Imhotep, thầy lang người Ai Cập sống ở thế kỷ 27 trước công nguyên", 
    attachment: fs.createReadStream(__dirname + `/cache/xaphu.jpg`)
   }, event.threadID, event.messageID);
   break;
case "13":
   api.sendMessage({
    body: "\n2. Xà phu⛎(30/11-17/12)\nTheo đó, người Babylon cổ đại đã cố ý bỏ qua sự hiện diện của chòm sao Xà Phu trên bầu trời, nhằm chia đều 12 chòm sao bắt đầu từ Bạch Dương cho đến Song Ngư theo bộ lịch 12 tháng của họ, tạo thành vòng tròn 12 cung hoàng đạo như chúng ta đang biết và sử dụng người thuộc cung này\nCung Xà Phu có nghĩa là “người mang rắn”, nó đã có hình ảnh minh họa từ thời xa xưa phác học một người đàn ông cường tráng giữ con rắn khổng lồ anaconda hướng lên bầu trời. Cung Xà Phu được xem là cung duy nhất có thể liên hệ hình ảnh với nhân loại, và có chung đặc điểm với Imhotep, thầy lang người Ai Cập sống ở thế kỷ 27 trước công nguyên", 
    attachment: fs.createReadStream(__dirname + `/cache/xaphu.jpg`)
   }, event.threadID, event.messageID);
   break;
  default:
 }
}
module.exports.handleEvent = function({ api, event}) {
 if (event.body.indexOf("12 cung hoàng đạo")==0 || (event.body.indexOf("12 cung hoàng đạo")==0)) {
  api.sendMessage({
   body: "☯12 Cung hoàng đạo☯ \n\n 1.Bạch dương♈\n 2. Kim ngưu♉\n 3. Song tử ♊\n 4.Cự giải♋\n 5.Sư tử♌ \n 6. Xử nữ♍\n 7. Thiên Bình♎\n 8. Bọ cạp♏\n 9. Nhân mã♐\n10. Ma kết ♑ \n11. Bảo bình ♒\n12. Song tử ♊\n 13. Xà phu⛎\n\nReply tin nhắn theo số để xem chi tiết hơn về từng cung hoàng đạo ! ",
   attachment: fs.createReadStream(__dirname + `/cache/12cunghoangdao.jpg`)
  }, event.threadID, (error, info) => global.client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: event.senderID}), event.messageID);
 }
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

}
