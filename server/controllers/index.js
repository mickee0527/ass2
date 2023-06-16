/* File : comm--401-ass2, Student’s Name: Lujia(Nina) Sun, StudentID: 300726390, and Date June 16 2023*/
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Password = require('passport');

//creat user model instance
let userModel = require('../modules/user');
let User = userModel.User;//alias



module.exports.displayHomePage = (req,res,next)=> {

    res.render('index', { title: 'Home'});
}
module.exports.displayAboutPage = (req,res,next)=> {

    res.render('index', { title: 'About'});
}
module.exports.displayProductsPage = (req,res,next)=> {

    res.render('index', { title: 'Products'});
}
module.exports.displayServicesPage = (req,res,next)=> {

    res.render('index', { title: 'Services'});
}
module.exports.displayContactPage = (req,res,next)=> {

    res.render('index', { title: 'Contact Me'});
}

module.exports.displayLoginPage = (req,res,next)=> {
    //checke if the user is ready for login
    if(!req.User)
    {
        res.render('auth/login',
        {
            title:"Login",
            massages:req.flash('loginmassages'),
            displayname: req.use ? req.user.displayname:''
        });
    }
    else{
        return res.rediirct('/');
    }

}

module.exports.proccessLoginPage = (req,res,next) => {
    passport.authenticate('local',
    (err,user,info) =>{
        //server err?
        if(err){
            return next (err);

        }
        //is there a user err?
        if(!user){

            req.flash('loginmassages','Authentication Error');
            return res.rediirct('/login');
        }
        req.login(user,(err)=>{

            //server err?
            if(err){
                return next(err);
            }
            return res.rediirct('/contact-list')

        });
    })(re,res,next);
    
}

module.exports.displayRegisterPage  = (req,res,next)=> {
    //checke if the user is not already login
    if(!req.User)
    {
        res.render('auth/register',
        {
            title:"Register",
            massages:req.flash('registermassages'),
            displayname: req.use ? req.user.displayname:''
        });
    }
    else{
        return res.rediirct('/');
    }

}

module.exports.proccessRegisterPage = (req,res,next)=> {
 //inintialize an user object 
 let newUser = new User({
    username: req.body.username,
    email: req.body.email,
    displayname: req.body.displayname
 });
 User.register(newUser,req.body.password,(err)=>{
    if(err){
        console.log(err);
        if(err.name == 'UserExistsError'){
            req.flash(
                'registerMassage',
                'Registration Error: User Already Exists!'

            );
            console.log('Error: User Already Exists!'
            );
        }
        return res.render('auth/register',
        {
            title:"Register",
            massages: req.flash('registermassages'),
            displayname:req.user ? req.user.displayname:''
        });
    }
    else{
        //if registration success
        return passpport.authenticate('local')(req,rez,()=>{
            req.rediirct('/contact-list')

        });
    }

 });

}

module.exports.performLogout = (req,res,next) => {
    req.logout((err)=>{
        if(err){
            //handle err here
            console.log(err);
            return next(err);
        }
    return res.redirect('/');

    });
}