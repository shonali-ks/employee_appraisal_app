const mongoose = require('mongoose');

var Employee = mongoose.model('Employee',{
    name: {type : String},
    position : {type : String},
    gender : {type : String},
    age : {type : Number},
    salary : {type : Number}
});
module.exports = { Employee };