const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('../models/employee');
//get all data
router.get('/',(req,res)=>{
    Employee.find((err,docs)=>{
        if(!err) 
        {
            res.send(docs);
        }
        else{
            console.log("retriving docs failed");
        }
    });
});

//saving all data
router.post('/',(req,res) => {
    var emp = new Employee({
        name : req.body.name,
        position : req.body.position,
        gender : req.body.gender,
        age : req.body.age,
        salary : req.body.salary
    });
    emp.save((err,doc)=> {
        if(!err) {res.send(doc);console.log(doc);}
        else console.log("error in saving");
    });

});
//finding data by id
router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    Employee.findById(req.params.id,(err,doc)=>{
        if(!err)
        res.send(doc);
        else console.log("error in finding id");
    })

});
//upadating based on id
router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
        var emp = {
            name : req.body.name,
            position : req.body.position,
            gender : req.body.gender,
            age : req.body.age,
            salary : req.body.salary
        };
        Employee.findByIdAndUpdate(req.params.id,{$set : emp}, {new : true},(err,doc)=>{
            if(!err)
        res.send(doc);
        else console.log("error in updating id");
        });

});
//deleting based on id
router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`not valid id : ${req.params.id}`);
    Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err)
        res.send(doc);
        else console.log("error in printing id");
    })

});
module.exports = router;