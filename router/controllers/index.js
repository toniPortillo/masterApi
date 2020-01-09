'use strict';
const database = require('../../utils/oracledb/dao');
const createLagerStController =  require('./lagerSts');
const lagerStRepository = require('../../repositories/index');
const lagerSts= lagerStRepository.LagerSt;


module.exports = {
  lagerSt: createLagerStController(database, lagerSts)
}
