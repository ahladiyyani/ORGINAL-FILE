var express = require('express');
var router = express.Router();
var userlogin = require("../controllers/loginController");

router.get('/',(req,res)=>{
    res.render('login');
}) 

router.get('/registration',(req,res)=>{
    res.render('registration');
})

router.post('/login',(req,res)=>{
    console.log(req.body);
    userlogin.login(req, res);
});

router.post('/registrationInsert',(req,res)=>{
    console.log(req.body);
    userlogin.userInsert(req, res);
});

module.exports = router;