const express = require('express');
 const router = express.Router();
 const homeController = require('../controllers/home_control');


 console.log("Router initialised");

 router.get('/',homeController.home);// calling home controller when '/' is called