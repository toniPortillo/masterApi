'use strict';
const createLagerStRepository = require('./lagerStRepository');

module.exports = {
  LagerSt: createLagerStRepository()
};