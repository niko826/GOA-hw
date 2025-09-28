const qrcode = require("qrcode");

const text = "https://www.Google.com"
qrcode.toFile("qrcode.png",text,function(err){
    if (err) throw err;
    console.log("qrcode crated succsefully");
})