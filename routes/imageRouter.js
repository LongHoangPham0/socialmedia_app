const router = require('express').Router()
const imageCtrl = require('../client/src/components/home/imageClassification')

router.get('/imageClassification', auth, imageCtrl.ImageClassification)