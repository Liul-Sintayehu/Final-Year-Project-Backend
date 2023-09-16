const model = require("./model")
const FeedbackModel = require("./models/feedback")
const DoctorRequestModel = require("./models/request/docrequset")
const PaymentModel = require("./models/request/payment")
const GagariRequestModel = require("./models/request/requestmodel")

const GagariRequest = (req,res)=>{
    const name = req.body.name
    const email = req.body.email
     
    const gagariRequest = new GagariRequestModel({name,email})
    gagariRequest.save()
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
}
const GetGagariRequest = (req,res)=>{
    GagariRequestModel.find({})
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
}

const DoctorRequest = (req,res)=>{
    const name = req.body.name
    const email = req.body.email
     
    const doctorRequest = new DoctorRequestModel({name,email})
    doctorRequest.save()
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
}
const GetDoctorRequest = (req,res)=>{
    DoctorRequestModel.findOne({})
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
}

const Payment = (req,res)=>{
    const name = req.body.name
    const email = req.body.email
    const amount = req.body.amount
     
    const payment = new PaymentModel({name,email,amount})
    payment.save()
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
}
const GetPayment = (req,res)=>{
    PaymentModel.find({})
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
}

const Notify =(req,res)=>{
    const user = model.findOne({email:req.body.email})
    user.updateOne({notification:req.body.notification})
    .then((result)=>{
        res.json(result)
         
    })
    .catch((err)=>{
        res.json(err)
    })
}
const GetFeedback = (req,res)=>{
    FeedbackModel.find({})
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
}


module.exports = {
    GagariRequest,
    DoctorRequest,
    GetGagariRequest,
    GetDoctorRequest,
    Payment,
    GetPayment,
    Notify,
    GetFeedback
}