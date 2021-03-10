'use strict';


/**
 * Add a new viewpoint
 *
 * body Viewpoint Viewpoint to be added to issue page
 * no response value expected for this operation
 **/
exports.addViewpoint = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Finds viewpoints by id
 * Muliple tags can be provided with comma separated strings. Use\\ \\ tag1, tag2, tag3 for testing.
 *
 * ids List ids
 * returns List
 **/
exports.getViewpointsByID = function(ids) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "author" : "author",
  "summary_text" : "summary_text",
  "id" : 6,
  "num_agrees" : 1
}, {
  "author" : "author",
  "summary_text" : "summary_text",
  "id" : 6,
  "num_agrees" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a viewpoint
 *
 * body Viewpoint Viewpoint to be added to issue page
 * no response value expected for this operation
 **/
exports.updateViewpoint = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

