'use strict';


/**
 * Add a new issue
 *
 * body Issue Issue to be added to organization
 * no response value expected for this operation
 **/
exports.addIssue = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Finds issues by id
 * Muliple tags can be provided with comma separated strings. Use\\ \\ tag1, tag2, tag3 for testing.
 *
 * ids List ids
 * returns List
 **/
exports.getIssuesByID = function(ids) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "organization" : "organization",
  "name" : "name",
  "id" : 0,
  "viewpoints" : [ {
    "author" : "author",
    "summary_text" : "summary_text",
    "id" : 6,
    "num_agrees" : 1
  }, {
    "author" : "author",
    "summary_text" : "summary_text",
    "id" : 6,
    "num_agrees" : 1
  } ],
  "leader_actions" : [ {
    "leader" : "leader",
    "bill" : "bill",
    "id" : 5,
    "vote" : "yes"
  }, {
    "leader" : "leader",
    "bill" : "bill",
    "id" : 5,
    "vote" : "yes"
  } ],
  "pop_estimate" : [ 5.962134, 5.962134 ]
}, {
  "organization" : "organization",
  "name" : "name",
  "id" : 0,
  "viewpoints" : [ {
    "author" : "author",
    "summary_text" : "summary_text",
    "id" : 6,
    "num_agrees" : 1
  }, {
    "author" : "author",
    "summary_text" : "summary_text",
    "id" : 6,
    "num_agrees" : 1
  } ],
  "leader_actions" : [ {
    "leader" : "leader",
    "bill" : "bill",
    "id" : 5,
    "vote" : "yes"
  }, {
    "leader" : "leader",
    "bill" : "bill",
    "id" : 5,
    "vote" : "yes"
  } ],
  "pop_estimate" : [ 5.962134, 5.962134 ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

