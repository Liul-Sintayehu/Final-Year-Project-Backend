const mongoose = require('mongoose')
const express = require('express')
const bcrypt = require('bcryptjs')
const Model = require('./model')
const GagariModel = require('./models/gagariModel')
const MelktModel = require('./models/melktmodel')
const RateModel = require('./models/rateModel')
const FeedbackModel = require('./models/feedback')




const Signup = async (req,res)=> {
    var bal = 500.0;
    let hashedPassword;
    bcrypt.genSalt(10,async (err, salt) => {
         bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) {
            console.error(err);
          } else {
            const user = new  Model({
                name:req.body.name,
                email:req.body.email,
                password:hash,
                balance:bal,
               
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
        });
      });
        
    
}
const Login = async (req,res)=>{
    const enteredPassword = req.body.password; // Assuming you're retrieving the entered password from the request body

    Model.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          // User not found
          return res.status(401).json({message:'invalid'})
          // Handle the error or return an appropriate response
        } else {
          bcrypt.compare(enteredPassword, user.password)
            .then(isMatch => {
              if (isMatch) {
                // Passwords match
                
                return res.status(200).json({message:'exists',user})
                // Proceed with further actions (e.g., generating a token, granting access, etc.)
              } else {
                // Passwords do not match
                console.log('Password is incorrect');
                // Handle the error or return an appropriate response
                return res.status(401).json({message:'invalid'})
              }
            })
            .catch(error => {
              
              // Handle the error or return an appropriate response
            });
        }
      })
      .catch(error => {
        console.error(error);
        // Handle the error or return an appropriate response
      });
    

        // if(!user){
        //     return res.status(401).json({message:'invalid'})
        // }

        //return res.status(200).json({message:'exists',user})

    

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
            res.json({message:average})
        })
        .catch((err)=>{
            res.json('err')
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
const Feedback =  (req,res)=>{
    
     
    const feedback = new FeedbackModel({
        
        email:req.body.email,
        subject:req.body.subject,
        message:req.body.message
    })
     
     
     feedback.save()
    .then((response)=>{
        console.log('user inserted');
        res.json({message:'added',response});

    })
    .catch((err)=>{
        console.log(err);
        res.json({message:'error'})
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
    getRateGagari,
    Feedback
}