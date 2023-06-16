/* File : comm--401-ass2, Student’s Name: Lujia(Nina) Sun, StudentID: 300726390, and Date June 16 2023*/
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Contact = require('../modules/contact');

module.exports.displayContactList = async (req,res,next)=>{
    try{
        let contactList = await Contact.find();
        //console.log(gameList);
        res.render('contact/list',{title: 'Contact List', ContactList: contactList})
    }catch(err){

        console.log(err);
    }};

module.exports.displayAddPage = async (req,res,next)=>{
    try{        
        res.render('contact/add',{title: 'Contact List'})
    }catch(err){

        console.log(err);
    }};

module.exports.proccessAddPage =async(req,res,nest) => {
    let newContact = new Contact({
        "contact_name": req.body.contact_name,
        "contact_number": req.body.contact_number,
        "email_address": req.body.email_address
    });
    try {
        await newContact.save();
        res.redirect('/contact-list')

    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
  
};

module.exports.displayEditPage =async (req,res,nest) => {
    let id = req.params.id;

    try{
        let contactToEdit = await Contact.findById(id);
        res.render("contact/update",{title:'Update Contact', contact:contactToEdit});
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.proccessEditPage =async (req,res,nest) => {
    let id = req.params.id;

    let updatedContact = {
        "contact_name":req.body.contact_name,
        "contact_number":req.body.contact_number,
        "email_address":req.body.email_address
    }
    try{
      await Contact.updateOne({_id:id}, updatedContact);
      res.redirect('/contact-list');
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }

};
module.exports.performDelete = async(req,res,nest) =>{
    let id = req.params.id;

    try {
        await Contact.findByIdAndRemove(id);
        res.redirect('/contact-list');
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }

};

