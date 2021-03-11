'use strict';

var utils = require('../utils/writer.js');
var Test = require('../service/TestService');

module.exports.addTest = function addTest (req, res, next, body) {
  Test.addTest(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTest = function updateTest (req, res, next, body) {
  Test.updateTest(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTestById = function getTestById (req, res, next, id) {
    Test.getTestById(id)
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
  };