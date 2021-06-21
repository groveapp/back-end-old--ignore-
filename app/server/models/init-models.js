var DataTypes = require("sequelize").DataTypes;
var _Census = require("./Census");
var _Issue = require("./Issue");
var _Leader = require("./Leader");
var _Organization = require("./Organization");
var _Profile = require("./Profile");
var _RawVote = require("./RawVote");
var _User = require("./User");
var _Users_Organizations = require("./User_Organization");
var _Viewpoint = require("./Viewpoint");

function initModels(sequelize) {
  var Census = _Census(sequelize, DataTypes);
  var Issue = _Issue(sequelize, DataTypes);
  var Leader = _Leader(sequelize, DataTypes);
  var Organization = _Organization(sequelize, DataTypes);
  var Profile = _Profile(sequelize, DataTypes);
  var RawVote = _RawVote(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);
  var Users_Organizations = _Users_Organizations(sequelize, DataTypes);
  var Viewpoint = _Viewpoint(sequelize, DataTypes);

  RawVote.belongsTo(Issue, { as: "issue", foreignKey: "issueId"});
  Issue.hasMany(RawVote, { as: "RawVotes", foreignKey: "issueId"});
  Viewpoint.belongsTo(Issue, { as: "issue", foreignKey: "issueId"});
  Issue.hasMany(Viewpoint, { as: "Viewpoints", foreignKey: "issueId"});
  Issue.belongsTo(Organization, { as: "organization", foreignKey: "organizationId"});
  Organization.hasMany(Issue, { as: "Issues", foreignKey: "organizationId"});
  Leader.belongsTo(Organization, { as: "organization", foreignKey: "organizationId"});
  Organization.hasMany(Leader, { as: "Leaders", foreignKey: "organizationId"});
  Users_Organizations.belongsTo(Organization, { as: "organization", foreignKey: "organizationId"});
  Organization.hasMany(Users_Organizations, { as: "Users_Organizations", foreignKey: "organizationId"});
  Profile.belongsTo(User, { as: "id_User", foreignKey: "id"});
  User.hasOne(Profile, { as: "Profile", foreignKey: "id"});
  RawVote.belongsTo(User, { as: "user", foreignKey: "userId"});
  User.hasMany(RawVote, { as: "RawVotes", foreignKey: "userId"});
  Viewpoint.belongsTo(User, { as: "user", foreignKey: "userId"});
  User.hasMany(Viewpoint, { as: "Viewpoints", foreignKey: "userId"});
  RawVote.belongsTo(Viewpoint, { as: "viewpoint", foreignKey: "viewpointId"});
  Viewpoint.hasMany(RawVote, { as: "RawVotes", foreignKey: "viewpointId"});

  return {
    Census,
    Issue,
    Leader,
    Organization,
    Profile,
    RawVote,
    User,
    Users_Organizations,
    Viewpoint,
  };
}
module.exports = initModels;
