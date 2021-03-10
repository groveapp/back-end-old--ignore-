'use strict';

var utils = require('../utils/writer.js');
var Viewpoint = require('../service/ViewpointService');

module.exports.addViewpoint = function addViewpoint (req, res, next, body) {
  Viewpoint.addViewpoint(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getViewpointsByID = function getViewpointsByID (req, res, next, ids) {
  Viewpoint.getViewpointsByID(ids)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateViewpoint = function updateViewpoint (req, res, next, body) {
  Viewpoint.updateViewpoint(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
