const AdminModel = require("./models/high/admin")
const ServiceModel = require("./models/high/serviceprovider")

const CreateAdmin = (req,res)=>{
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
     
    const admin = new AdminModel({name,email,password})
    admin.save()
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
}
const CreateService = (req,res)=>{
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
     
    const service = new ServiceModel({name,email,password})
    service.save()
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
}
const LoginAdmin = (req,res)=>{
    const email = req.body.email
    const password = req.body.password
    AdminModel.findOne({email,password})
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports = {
    CreateAdmin,
    CreateService,
    LoginAdmin
}