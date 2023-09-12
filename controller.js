const mongoose = require('mongoose')
const express = require('express')
const Model = require('./model')
const GagariModel = require('./models/gagariModel')
const MelktModel = require('./models/melktmodel')
const RateModel = require('./models/rateModel')



const Signup =  (req,res)=>{
    var balance = 500;
    const [name,email,password] = req.body
    const user = new Model({
        name:name,
        email:email,
        password:password,
        balance:balance
    })
     
     
     user.save()
    .then((response)=>{
        console.log('user inserted');
        res.json({message:'added',response});

    })
    .catch((err)=>{
        console.log(err);
        res.json({message:'error'})
    })
}
const Login = async (req,res)=>{
     const {email,password} = req.body
     const user = await Model.findOne({email,password})
     
        if(!user){
            return res.status(401).json({message:'invalid'})
        }

        return res.status(200).json({message:'exists',user})

    

}

//new

const Create = (req, res) => {
    const data = [{ name: req.body.teteriN, address: req.body.teteriA }]
    // var tn = req.body.teteriN
    // var ta = req.body.teteriA
    // var full = [];
    // for (var i = 0; i < ; i++) {
    //     full.push({ name: tn[i], address: ta[i] });
    // }

    const client = new MelktModel({
        senderName: req.body.senderName,
        info: req.body.info,
        gps: req.body.gps,
        teteri: req.body.teteri
    })
    client.save()
        .then(resp => {
            res.json({ msg: "request added" });
        })
        .catch(err => {
            res.json({msg:'err'})
        })



    
}
const Rate = (req, res) => {
    const rate = new RateModel(req.body)
    rate.save()
        .then((response) => {
            res.json('rated');
        })
        .catch((err) => {
            res.status(401).json('not rated')
             
        })

}
const getRate = (req, res) => {
    RateModel.aggregate([{ $group: { _id: null, average: { $avg: "$rate" } } }])
        .then((result) => {
            const average = result[0].average
            c 
            res.json({message:average})
        })
        .catch((err)=>{
            res.json(err)
        })
}
const createGagari = (req,res)=>{
    const name = req.body.name
    const phone = req.body.phone
    var rate = 0.0;
    const experiance = req.body.experiance
    if(req.body.rate != undefined ){
        rate = req.body.rate
    }
    const gagari = new GagariModel({name,phone,rate,experiance})
    gagari.save()
    .then((result)=>{
        res.json('gagai added')
    })
    .catch((err)=>{
        res.json({msg:'err'})
    })
}
const rateGagari = (req,res)=>{
    const gagari = GagariModel.findOne({name:req.body.name})
    gagari.updateOne({rate:req.body.rate})
    .then((result)=>{
        res.json({msg:'updated'})
         
    })
    .catch((err)=>{
        res.json({msg:'err'})
    })
    
}
const getRateGagari = (req,res)=>{
    const name = req.body.name
    GagariModel.findOne({name})
    .then((gagari)=>{
        res.json({rate:gagari.rate})
    })
    .catch((err)=>{
        res.json({msg:"error"})
    })
}

module.exports = {
    Signup,
    Login,
    Create,
    Rate,
    getRate,
    createGagari,
    rateGagari,
    getRateGagari
}