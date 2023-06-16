/* File : comm--401-ass2, Student’s Name: Lujia(Nina) Sun, StudentID: 300726390, and Date June 16 2023*/
let mongoose =require('mongoose');


let contactModel = mongoose.Schema({
    contact_name:String,
    contact_number:String,
    email_address:String
    
},
{
    collection:'contact'

});

module.exports  = mongoose.model('Contact',contactModel);

