var express = require('express');
var router = express.Router();
var userlogin = require("../controllers/loginController");

const multer =require("multer");
const path = require("path");

var storage = multer.diskStorage({  
    destination: (req, file, callBack) => { 
        callBack (null, './public/images/')},

// */public/images/ directory name where save the file

filename: (req, file, callBack) => {
    callBack (null, file.fieldname  +'-'+ Date.now() + path.extname (file.originalname))
}
})



var upload = multer({

storage: storage

});


router.get('/',(req,res)=>{
    res.render('login');
}) 

router.get('/registration',(req,res)=>{
    res.render('registration');
})

router.post('/login',(req,res)=>{
    // console.log(req.body);
    userlogin.login(req, res);
});


   

router.post('/registrationInsert', upload.single('image'), (req, res) => {

if (!req.file) {

console.log("No file upload");

} else {

console.log(req.file.filename);

var imgsrc = 'http://localhost:4500/images/' + req.file.filename;

req.body.filename= req.file.filename;

req.body.filepath = imgsrc;

console.log(req.body);

 userlogin.userInsert (req, res);
}
});


    // console.log(req.body);
    

router.get('/deletePassword',(req,res)=>{
    res.render('deleteuser');
})
router.get('/editPassword',(req,res)=>{
    res.render('editpassword');
})
router.post('/editpasswordUpdate',(req,res)=>{
    console.log(req.body);
    userlogin.update(req, res);
});

router.post('/deletePassword',(req,res)=>{
    console.log(req.body);
    userlogin.remove(req, res);
});

router.get('/adminlogin',(req,res)=>{
    res.render('admin.ejs');
})
router.post('/adminloginonly',(req,res)=>{
    console.log(req.body);
    userlogin.admin1(req, res);
});



module.exports = router;