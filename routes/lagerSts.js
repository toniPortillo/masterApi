'use strict';
var express = require('express');
var router = express.Router();

const lagerStController = require('../router/controllers/index');
//const showLagerSts = lagerStController.showLagerSts;
const lagerSts = lagerStController.lagerSt;
router.get('/', lagerSts.showLagerSts);

module.exports = router;