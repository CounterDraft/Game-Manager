"use strict";
//set The GLOBALS;
var bootstrap = require('./bootstrap.js');

bootstrap.init()
    .then(function(result) {

    console.log(result);




    }).catch(function(err){
        console.error(err);
    });
