'use strict';

/**
 * Create user
 * This can only be done by the logged in user.
 *
 * body User Created user object
 * no response value expected for this operation
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete user
 * This can only be done by the logged in user.
 *
 * username String The name that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteUser = function(username) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get user by user name
 *
 * username String The name that needs to be fetched. Use user1 for testing.
 * returns User
 **/
exports.getUserByName = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "password" : "",
  "phone" : "phone",
  "organizations" : [ {
    "members" : [ {
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
    "name" : "name",
    "leaders" : [ {
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
    } ],
    "id" : 6,
    "issues" : [ {
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
    } ]
  }, {
    "members" : [ {
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
    "name" : "name",
    "leaders" : [ {
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
    } ],
    "id" : 6,
    "issues" : [ {
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
    } ]
  } ],
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
  "email" : "email",
  "username" : "username",
  "demographics" : [ "", "" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logs user into the system
 *
 * username String The user name for login
 * password String The password for login in clear text
 * returns String
 **/
exports.loginUser = function(username,password) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logs out current logged in user session
 *
 * no response value expected for this operation
 **/
exports.logoutUser = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updated user
 * This can only be done by the logged in user.
 *
 * body User Updated user object
 * username String name that need to be updated
 * no response value expected for this operation
 **/
exports.updateUser = function(body,username) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

