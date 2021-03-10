'use strict';

var utils = require('../utils/writer.js');
var Issue = require('../service/IssueService');

module.exports.addIssue = function addIssue (req, res, next, body) {
  Issue.addIssue(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getIssuesByID = function getIssuesByID (req, res, next, ids) {
  Issue.getIssuesByID(ids)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
