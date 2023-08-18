const mongoose = require('mongoose')
const express = require('express')
const Model = require('./model')

const Signup = async (req,res)=>{
    const user = new Model(req.body)
    await user.save()
    .then((res)=>{
        console.log('user inserted');
        res.send("true")
    })
    .catch((err)=>{
        console.log(err);
        res.send({message:false})
    })
}
const Login = async (req,res)=>{
     const {name,password} = req.body
     const user = await Model.findOne({name,password})
     try{
        if(!user){
            return res.status(401).json({message:'invalid credentials'})
        }

        return res.status(200).json({message:'home page display'})

     }catch(err){
        console.log(err);
     }

}

module.exports = {
    Signup,
    Login
}