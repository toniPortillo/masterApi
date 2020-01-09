'use strict';

module.exports = (database, lagerSts) => {
  const showLagerSts = (req, res, next) => {
    const sql = lagerSts.getAll();
    console.log(sql);
    database.open(sql, [], false, res);
  };

  const findOneLagerSt = (req, res, next) => {
    const sql = lagerSts.findOne();
    console.log(sql);
    console.log(req.query.lag_referenz)
    let lag_referenz = parseInt(req.query.lag_referenz);
    database.open(sql, [lag_referenz], false, res)
  };

  const insertOneLagerSt = (req, res, next) => {
    const sql = lagerSts.insertOne();
    console.log(sql);
    console.log(req.query)
    let lag_mandant = req.query.lag_mandant;
    let lag_art_typ = parseInt(req.query.lag_art_typ);
    let lag_art_num = parseInt(req.query.lag_art_num);
    let lag_bestand = parseInt(req.query.lag_bestand);
    let lag_res_bestand = parseInt(req.query.lag_res_bestand);
    let lag_referenz = parseInt(req.query.lag_referenz);
    let lag_breite = parseInt(req.query.lag_breite);
    let lag_hoehe = parseInt(req.query.lag_hoehe);
    let lag_mat_code = req.query.lag_mat_code;
    let lag_ltzt_ein_dat = req.query.lag_ltzt_ein_dat;
    database.open(sql, [lag_mandant, lag_art_typ, lag_art_num, lag_bestand, lag_res_bestand, lag_referenz, lag_breite,
    lag_hoehe, lag_mat_code, lag_ltzt_ein_dat], true, res);
  };

  const deleteOneLagerSt = (req, res, next) => {
    const sql = lagerSts.deleteOne();
    console.log(sql);
    console.log(req.query.lag_referenz);
    let lag_referenz = parseInt(req.query.lag_referenz);
    database.open(sql, [lag_referenz], true, res);
  }

  return {showLagerSts, findOneLagerSt, insertOneLagerSt, deleteOneLagerSt};
}