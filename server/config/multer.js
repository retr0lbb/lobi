const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const uploads = "../uploads/";

        if(!fs.existsSync(uploads)){
            fs.mkdirSync(uploads, {recursive: true});
        }
        cb(null, uploads)
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname));
    }
})