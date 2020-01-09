'use strict';

const lagerStRepository = require('../../repositories/index');
const lagerSts= lagerStRepository.LagerSt;
module.exports = (database) => {
  const showLagerSts = (req, res, next) => {
    const sql = lagerSts.getAll();
    console.log(sql);
    database.open(sql, [], false, res);
  }

  const findOneLagerSt = (req, res, next) => {
    const sql = lagerSts.findOne();
    console.log(sql);
    console.log(req.query.lag_referenz)
    let lag_referenz = parseInt(req.query.lag_referenz);
    database.open(sql, [lag_referenz], false, res)
  }

  return {showLagerSts, findOneLagerSt};
}