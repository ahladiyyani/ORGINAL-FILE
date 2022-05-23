var userlogin = require("../model/login.js");
var express = require("express");
var router=express.Router();
// const {use}=require("../routes/index.js")

exports.login = function (req, res, next) {
    // console.log(req.body);
    if (req.method == "POST") {
        var user = {};
        user.email = req.body.email;
        user.password = req.body.password;
        // console.log(user.email);

        // var post = req.body;
        // var password = post.password.trim();
        // user.email = post.email;
        userlogin.login(user, function (err, data) {
            console.log(data);
            if (!err) {
                if (data) {
                            res.render('userloginpage.ejs',{data:data});
                }
                else {

                    res.render('login.ejs');
                }
           
    }});
    } else {
        res.render('login.ejs');
    }
};


exports.userInsert = function (req, res, next) {

    let data = req.body;
    // console.log('Insert');
    // console.log(data);

    userlogin.createNewUser(data, function (err, result) {
        if(err){
            console.log(err);
        }else{
            res.end(JSON.stringify(result))
        }
    });
};


exports.update = function (req, res, next) {

    let data = req.body;
    // console.log('Insert');
    // console.log(data);

    userlogin.updateUser(data, function (err, result) {
        if(err){
            console.log(err);
        }else{
            res.end(JSON.stringify(result))
        }
    });
};


exports.remove = function (req, res, next) {

    let data = req.body;
    // console.log('Insert');
    // .log(data);

    userlogin.removeUser(data, function (err, result) {
        if(err){
            console.log(err);
        }else{
            res.end(JSON.stringify(result))
        }
    });
};



exports.admin1 = function (req, res, next) {
    // console.log(req.body);
    if (req.method == "POST") {
        var user = {};
        user.email = req.body.email;
        user.password = req.body.password;
        // console.log(user.email);

        // var post = req.body;
        // var password = post.password.trim();
        // user.email = post.email;
        userlogin.admin2(user, function (err, data) {
            // console.log(data);
            console.log(data);
            if (!err) {
                if (data) {
                            res.render('userloginpage.ejs',{data:data});
                }
                else {

                    res.render('login.ejs');
                }
           
    }});
    } else {
        res.render('login.ejs');
    }
};