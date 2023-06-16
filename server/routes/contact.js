/* File : comm--401-ass2, Student’s Name: Lujia(Nina) Sun, StudentID: 300726390, and Date June 16 2023*/
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to your game model

let Contact = require('../modules/contact');
let contactController = require('../controllers/contact')

//get route for the game list page -read operation

router.get('/',contactController.displayContactList);

//get router for the add page - create operation

router.get('/add',contactController.displayAddPage);

//post route for proccessing the add page - create opreation
router.post('/add',contactController.proccessAddPage);

//get route for  displaying the edit page- update opreation
router.get('/update/:id',contactController. displayEditPage);
// post route for proccessing the edit page - update opreraton
router.post('/update/:id',contactController. proccessEditPage);
//get to perform deletion - delete operation
router.get('/delete/:id',contactController.performDelete);
    module.exports = router;