const express = require('express');
 const router = express.Router();



 console.log("Router initialised");

 router.get('/',homeController.home);// calling home controller when '/' is called