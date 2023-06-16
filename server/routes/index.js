/* File : comm--401-ass1, Student’s Name: Lujia(Nina) Sun, StudentID: 300726390, and Date June 1 2023*/
var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index')

/* GET home page. */
router.get('/',indexController.displayHomePage);

/* GET home page. */
router.get('/home',indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);
/* GET product page. */
router.get('/products', indexController.displayProductsPage);
/* GET services page. */
router.get('/services', indexController.displayServicesPage);
/* GET contact page. */
router.get('/contact',indexController.displayContactPage);
/* File : comm--401-ass2, Student’s Name: Lujia(Nina) Sun, StudentID: 300726390, and Date June 16 2023*/
/* GET Route for displaying the login  page. */
router.get('/login',indexController.displayLoginPage);

/* GET Route for proccessing the login  page. */
router.post('/login',indexController.proccessLoginPage);

/* GET Route for displaying the redgister  page. */
router.get('/register',indexController.displayRegisterPage);





module.exports = router;
