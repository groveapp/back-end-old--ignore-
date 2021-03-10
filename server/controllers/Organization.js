'use strict';

var utils = require('../utils/writer.js');
var Organization = require('../service/OrganizationService');

module.exports.addOrg = function addOrg (req, res, next, body) {
  Organization.addOrg(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateOrg = function updateOrg (req, res, next, body) {
  Pet.updateOrg(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};