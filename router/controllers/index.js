'use strict';
const database = require('../../utils/oracledb/dao');
const createLagerStController =  require('./lagerSts');

module.exports = {
  lagerSt: createLagerStController(database)
}
