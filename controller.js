const mongoose = require('mongoose')
const express = require('express')
const Model = require('./model')

const Signup = async (req,res)=>{
    const user = new Model(req.body)
    const userCheck = await Model.findOne({email,password});
    if(userCheck){
        return res.json('user exists');
    }
    await user.save()
    .then((response)=>{
        console.log('user inserted');
        res.json({message:'added'});

    })
    .catch((err)=>{
        console.log(err);
        res.json({message:'error'})
    })
}
const Login = async (req,res)=>{
     const {name,email,password} = req.body
     const user = await Model.findOne({email,password})
     
        if(!user){
            return res.status(401).json({message:'invalid'})
        }

        return res.status(200).json({message:'exists'})

    

}

module.exports = {
    Signup,
    Login
}