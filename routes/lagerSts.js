'use strict';
var express = require('express');
var router = express.Router();

const lagerStController = require('../router/controllers/index');
const lagerSts = lagerStController.lagerSt;
router.get('/', lagerSts.showLagerSts);
router.get('/findone', lagerSts.findOneLagerSt);
router.get('/insertone', lagerSts.insertOneLagerSt);
router.get('/deleteone', lagerSts.deleteOneLagerSt);

module.exports = router;