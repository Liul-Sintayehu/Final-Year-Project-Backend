const mongoose = require('mongoose')
const MelktModel = require('./models/melktmodel')
const GagariModel = require('./models/gagariModel')
const MelktegnaModel = require('./models/melktegnaModel')
const FirstAiderModel = require('./models/firstAid')

const GetMelkts = (req,res)=>{
    MelktModel.find({})
    .then((result)=>{
        //var count = result.length
        res.json(result)
    })
    .catch((err)=>{
        console.log(err);
    })
}
const GetMelkt = (req,res)=>{
    var senderName = req.body.senderName;
    MelktModel.find({senderName})
    .then((result)=>{
        res.json(result)
    })
}

const GetGagaris = (req,res)=>{
    GagariModel.find({})
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
}
const GetGagari = (req,res)=>{
    var name = req.body.name;
    GagariModel.find({name})
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        console.log(err);
    })
}
const CreateMelktegna = (req,res)=>{
     

    const name = req.body.name
    var rate = 0.0;
    const phone = req.body.phone
    const subcity = req.body.subcity
    const payment = req.body.payment
    const method = req.body.method
    const experiance = req.body.experiance
    if(req.body.rate != undefined ){
        rate = req.body.rate
    }
    const melktegna = new MelktegnaModel({name,phone,rate,subcity,payment,
        method,experiance})
    melktegna.save()
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })



}
const CreateFirstAider = (req,res)=>{
    const name = req.body.name
    const phone = req.body.phone
    var rate = 0.0;
    const subcity = req.body.subcity
    const experiance = req.body.experiance
    const proffesion = req.body.proffesion
    if(req.body.rate != undefined ){
        rate = req.body.rate
    }
    const firstAider = new FirstAiderModel({name,phone,rate,subcity,experiance,proffesion})
    firstAider.save()
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json({msg:'err'})
    })
}
const GetFirstAiders = (req,res)=>{
    FirstAiderModel.find({})
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
}
const RateFirstAider =(req,res)=>{
    const firstAider = FirstAiderModel.findOne({name:req.body.name})
    firstAider.updateOne({rate:req.body.rate})
    .then((result)=>{
        res.json({msg:'updated'})
         
    })
    .catch((err)=>{
        res.json({msg:'err'})
    })
}
const GetFirstAider = (req,res)=>{
    var name = req.body.name;
    FirstAiderModel.find({name})
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        console.log(err);
    })
}
const GetRateFirstAider = (req,res)=>{
    const name = req.body.name
    FirstAiderModel.find({name:name})
    .then((result)=>{
        res.json({rate:result.rate})
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports = {
    GetMelkts,
    GetMelkt,
    GetGagaris,
    GetGagari,
    CreateMelktegna,
    CreateFirstAider,
    GetFirstAiders,
    RateFirstAider,
    GetFirstAider,
    GetRateFirstAider
}