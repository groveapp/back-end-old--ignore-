'use strict';


/**
 * Add a new leader
 *
 * body Leader Issue to be added to organization
 * no response value expected for this operation
 **/
exports.addLeader = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Finds leaders by id
 * Muliple tags can be provided with comma separated strings. Use\\ \\ tag1, tag2, tag3 for testing.
 *
 * ids List ids
 * returns List
 **/
exports.getLeadersByID = function(ids) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "last_name" : "last_name",
  "div_index" : 6.0274563,
  "id" : 0,
  "title" : "title",
  "first_name" : "first_name",
  "actions" : [ {
    "leader" : "leader",
    "bill" : "bill",
    "id" : 5,
    "vote" : "yes"
  }, {
    "leader" : "leader",
    "bill" : "bill",
    "id" : 5,
    "vote" : "yes"
  } ]
}, {
  "last_name" : "last_name",
  "div_index" : 6.0274563,
  "id" : 0,
  "title" : "title",
  "first_name" : "first_name",
  "actions" : [ {
    "leader" : "leader",
    "bill" : "bill",
    "id" : 5,
    "vote" : "yes"
  }, {
    "leader" : "leader",
    "bill" : "bill",
    "id" : 5,
    "vote" : "yes"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a leader
 *
 * body Leader Issue to be added to organization
 * no response value expected for this operation
 **/
exports.updateLeader = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

