const express = require('express')
const { Signup, Login, Rate, Create, getRate, createGagari, rateGagari, getRateGagari, Feedback  } = require('./controller')
const { GetMelkts, GetMelkt, GetGagari, CreateMelktegna, CreateFirstAider, GetFirstAiders, RateFirstAider, GetGagaris, GetFirstAider, GetRateFirstAider } = require('./controller2')
const { GetMelktegna, GetMelktegnas } = require('./controller3')
const { RateMelktegna } = require('./controller3')
const { GetRateMelktegnaw } = require('./controller3')
const { Download } = require('./controller3')
const { GetDownloads } = require('./controller3')
const { GagariRequest, GetGagariRequest, DoctorRequest, GetDoctorRequest, Payment, GetPayment, Notify } = require('./controller4')

const router = express.Router()

router.post('/signup',Signup)
router.post('/login',Login)

//melktegnaw
router.post('/create',Create)
router.post('/getmelkt',GetMelkt)
router.get('/getmelkts',GetMelkts)

//delivery
router.post('/createmelktegna',CreateMelktegna)
router.post('/getmelktegna',GetMelktegna)
router.get('/getmelktegnas',GetMelktegnas)
router.post('/ratemelktegna',RateMelktegna)
router.post('/getratemelktegna',GetRateMelktegnaw)


//rating
router.post('/rate',Rate)
router.get('/getrate',getRate)


//gagari
router.post('/creategagari',createGagari)
router.post('/getgagari',GetGagari)
router.get('/getgagaris',GetGagaris)
router.post('/rategagari',rateGagari)
router.post('/getrategagari',getRateGagari)



//firstaid
router.post('/createfirstaiders',CreateFirstAider)
router.post('/getfirstaider',GetFirstAider)
router.get('/getfirstaiders',GetFirstAiders)
router.post('/ratefirstaider',RateFirstAider)
router.post('/getratefirstaider',GetRateFirstAider)

//downloads
router.post('/download',Download)
router.get('/getdownloads',GetDownloads)

//feedback
router.post('/feedback',Feedback)



//requests

//gagarirequests
router.post('/creategagarirequest',GagariRequest)
router.get('/getgagarirequest',GetGagariRequest)

//doctorrequesst
router.post('/createdoctorrequest',DoctorRequest)
router.get('/getdoctorrequest',GetDoctorRequest)
//payment
router.post('/payment',Payment)
router.get('/getpayment',GetPayment)
//notification
router.post('/notify',Notify)


//melkt page
// router.get('/home',(req,res)=>{
//     res.json({msg:'home page router'});
// })
router.get('/',(req,res)=>{
    res.json({msg:"server runnig"})
})


module.exports = router