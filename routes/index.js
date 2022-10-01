const express = require('express');
 const router = express.Router();
 const homeController = require('../controllers/home-control');


 console.log("Router initialised");

 router.get('/',homeController.home);// calling home controller when '/' is called


 module.exports=router;// export the router so that main index.js use it