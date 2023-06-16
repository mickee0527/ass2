/* File : comm--401-ass2, Student’s Name: Lujia(Nina) Sun, StudentID: 300726390, and Date June 16 2023*/
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema(
{
    username:
    {
        type:String,
        defult:"",
        trim: true,
        require:'Username is required'
    },
    email:
    {
        type:String,
        defult:"",
        trim: true,
        require:'email is required'
    },
    displayname:
    {
        type:String,
        defult:"",
        trim: true,
        require:'Dispaly name is required'
    }


},
{
    collection:"users"
}

);

//configure options for User model

let options = ({missingPasswordError: 'Wring / Missing Password'});
User.plugin(passportLocalMongoose,options);
module.exports.User = mongoose.model('User',User);
