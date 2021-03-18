'use strict';

var utils = require('../utils/writer.js');
var Leader = require('../service/LeaderService');

module.exports.addLeader = function addLeader (req, res, next, body) {
  Leader.addLeader(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLeadersByID = function getLeadersByID (req, res, next, ids) {
  Leader.getLeadersByID(ids)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateLeader = function updateLeader (req, res, next, body) {
  Leader.updateLeader(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
