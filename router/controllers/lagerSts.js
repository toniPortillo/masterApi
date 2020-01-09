'use strict';

const lagerStRepository = require('../../repositories/index');
const lagerSts= lagerStRepository.LagerSt;
module.exports = (database) => {
  const showLagerSts = (req, res, next) => {
    const sql = lagerSts.getAll();
    console.log(sql);
    database.open(sql, [], false, res);
  }

  return { showLagerSts };
}