'use strict';

module.exports = () => {
  const getAll =  () => {
    const sql = "SELECT lag_mandant, lag_art_typ, lag_art_num, lag_mng_einh, lag_mng_stk, lag_min_bestell, lag_min_bestand, "+
    "lag_gepl_bestand, lag_bestellt, lag_ltzt_lief_nr, lag_bestelltext_jn, lag_lfm_stk, lag_priority, lag_vorlauf, lag_bearb, lag_sform, "+
    "lag_ltzt_bew_dat, lag_max_wbz, lag_min_wbz, lag_verfuegbar, lag_kg_stk, lag_lit_stk, lag_zuschn_jn, lag_bestand, lag_res_bestand, "
    +"lag_referenz, lag_breite, lag_hoehe, lag_mat_code, lag_ltzt_ein_dat, lag_eink_preis, lag_grp_id, lag_tiefe, lag_max_bestand, "
    +"lag_max_bestand, lag_classific, lag_osp_ref, lag_osp_itm, lag_osp_seq, lag_stockval_mode, lag_model_id FROM lager_st"
    return sql;
  };

  const findOne = () => {
    const sql = "SELECT lag_mandant, lag_art_typ, lag_art_num, lag_mng_einh, lag_mng_stk, lag_min_bestell, lag_min_bestand, "+
    "lag_gepl_bestand, lag_bestellt, lag_ltzt_lief_nr, lag_bestelltext_jn, lag_lfm_stk, lag_priority, lag_vorlauf, lag_bearb, lag_sform, "+
    "lag_ltzt_bew_dat, lag_max_wbz, lag_min_wbz, lag_verfuegbar, lag_kg_stk, lag_lit_stk, lag_zuschn_jn, lag_bestand, lag_res_bestand, "
    +"lag_referenz, lag_breite, lag_hoehe, lag_mat_code, lag_ltzt_ein_dat, lag_eink_preis, lag_grp_id, lag_tiefe, lag_max_bestand, "
    +"lag_max_bestand, lag_classific, lag_osp_ref, lag_osp_itm, lag_osp_seq, lag_stockval_mode, lag_model_id FROM lager_st "+
    "WHERE lag_referenz=:lag_referenz";
    return sql;
  };

  const insertOne = () => {
    const sql = "INSERT INTO lager_st (lag_mandant, lag_art_typ, lag_art_num, lag_bestand, lag_res_bestand, lag_referenz, "+
        "lag_breite, lag_hoehe, lag_mat_code, lag_ltzt_ein_dat) VALUES (:lag_mandant, :lag_art_typ, :lag_art_num, :lag_bestand, "+
        ":lag_res_bestand, :lag_referenz, :lag_breite, :lag_hoehe, :lag_mat_code, TO_DATE(:lag_ltzt_ein_dat, 'DDMMYYYY'))";
    return sql;
  };

  const deleteOne = () => {
    const sql = "DELETE FROM lager_st WHERE lag_referenz=:lag_referenz";
    return sql;
  }
  
  return {getAll, findOne, insertOne, deleteOne};
}


//const sql = "INSERT INTO lager_st (lag_referenz) VALUES (:lag_referenz)";