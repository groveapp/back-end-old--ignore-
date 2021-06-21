var DataTypes = require("sequelize").DataTypes;
var _Census = require("./Census");
var _Issue = require("./Issue");
var _Issue_LeaderAction = require("./Issue_LeaderAction");
var _Leader = require("./Leader");
var _LeaderAction = require("./LeaderAction");
var _Leaders_Organizations = require("./Leaders_Organizations");
var _Organization = require("./Organization");
var _RawVotes = require("./RawVotes");
var _Reply = require("./Reply");
var _Role = require("./Role");
var _Tags = require("./Tags");
var _Test = require("./Test");
var _User = require("./User");
var _User_Leaders = require("./User_Leaders");
var _Users_Organizations = require("./Users_Organizations");
var _Viewpoint = require("./Viewpoint");

function initModels(sequelize) {
  var Census = _Census(sequelize, DataTypes);
  var Issue = _Issue(sequelize, DataTypes);
  var Issue_LeaderAction = _Issue_LeaderAction(sequelize, DataTypes);
  var Leader = _Leader(sequelize, DataTypes);
  var LeaderAction = _LeaderAction(sequelize, DataTypes);
  var Leaders_Organizations = _Leaders_Organizations(sequelize, DataTypes);
  var Organization = _Organization(sequelize, DataTypes);
  var RawVotes = _RawVotes(sequelize, DataTypes);
  var Reply = _Reply(sequelize, DataTypes);
  var Role = _Role(sequelize, DataTypes);
  var Tags = _Tags(sequelize, DataTypes);
  var Test = _Test(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);
  var User_Leaders = _User_Leaders(sequelize, DataTypes);
  var Users_Organizations = _Users_Organizations(sequelize, DataTypes);
  var Viewpoint = _Viewpoint(sequelize, DataTypes);

  Issue_LeaderAction.belongsTo(Issue, { as: "issue", foreignKey: "issueId"});
  Issue.hasMany(Issue_LeaderAction, { as: "Issue_LeaderActions", foreignKey: "issueId"});
  RawVotes.belongsTo(Issue, { as: "issue", foreignKey: "issueId"});
  Issue.hasMany(RawVotes, { as: "RawVotes", foreignKey: "issueId"});
  Tags.belongsTo(Issue, { as: "issue", foreignKey: "issueId"});
  Issue.hasOne(Tags, { as: "Tag", foreignKey: "issueId"});
  LeaderAction.belongsTo(Leader, { as: "id_Leader", foreignKey: "id"});
  Leader.hasOne(LeaderAction, { as: "LeaderAction", foreignKey: "id"});
  Leaders_Organizations.belongsTo(Leader, { as: "leader", foreignKey: "leaderId"});
  Leader.hasMany(Leaders_Organizations, { as: "Leaders_Organizations", foreignKey: "leaderId"});
  Role.belongsTo(Leader, { as: "leader", foreignKey: "leaderId"});
  Leader.hasMany(Role, { as: "Roles", foreignKey: "leaderId"});
  User_Leaders.belongsTo(Leader, { as: "leader", foreignKey: "leaderId"});
  Leader.hasMany(User_Leaders, { as: "User_Leaders", foreignKey: "leaderId"});
  Issue_LeaderAction.belongsTo(LeaderAction, { as: "action", foreignKey: "actionId"});
  LeaderAction.hasMany(Issue_LeaderAction, { as: "Issue_LeaderActions", foreignKey: "actionId"});
  Issue.belongsTo(Organization, { as: "id_Organization", foreignKey: "id"});
  Organization.hasOne(Issue, { as: "Issue", foreignKey: "id"});
  Leaders_Organizations.belongsTo(Organization, { as: "organization", foreignKey: "organizationId"});
  Organization.hasMany(Leaders_Organizations, { as: "Leaders_Organizations", foreignKey: "organizationId"});
  RawVotes.belongsTo(Organization, { as: "organization", foreignKey: "organizationId"});
  Organization.hasMany(RawVotes, { as: "RawVotes", foreignKey: "organizationId"});
  Role.belongsTo(Organization, { as: "organization", foreignKey: "organizationId"});
  Organization.hasMany(Role, { as: "Roles", foreignKey: "organizationId"});
  User.belongsTo(Organization, { as: "id_Organization", foreignKey: "id"});
  Organization.hasOne(User, { as: "User", foreignKey: "id"});
  Users_Organizations.belongsTo(Organization, { as: "organization", foreignKey: "organizationId"});
  Organization.hasMany(Users_Organizations, { as: "Users_Organizations", foreignKey: "organizationId"});
  Viewpoint.belongsTo(Organization, { as: "id_Organization", foreignKey: "id"});
  Organization.hasOne(Viewpoint, { as: "Viewpoint", foreignKey: "id"});
  Leader.belongsTo(User, { as: "user", foreignKey: "userId"});
  User.hasMany(Leader, { as: "Leaders", foreignKey: "userId"});
  RawVotes.belongsTo(User, { as: "user", foreignKey: "userId"});
  User.hasMany(RawVotes, { as: "RawVotes", foreignKey: "userId"});
  Reply.belongsTo(User, { as: "createdBy_User", foreignKey: "createdBy"});
  User.hasMany(Reply, { as: "Replies", foreignKey: "createdBy"});
  User_Leaders.belongsTo(User, { as: "user", foreignKey: "userId"});
  User.hasMany(User_Leaders, { as: "User_Leaders", foreignKey: "userId"});
  Users_Organizations.belongsTo(User, { as: "user", foreignKey: "userId"});
  User.hasMany(Users_Organizations, { as: "Users_Organizations", foreignKey: "userId"});
  Viewpoint.belongsTo(User, { as: "createdBy_User", foreignKey: "createdBy"});
  User.hasMany(Viewpoint, { as: "Viewpoints", foreignKey: "createdBy"});
  RawVotes.belongsTo(Viewpoint, { as: "viewpoint", foreignKey: "viewpointId"});
  Viewpoint.hasMany(RawVotes, { as: "RawVotes", foreignKey: "viewpointId"});
  Reply.belongsTo(Viewpoint, { as: "id_Viewpoint", foreignKey: "id"});
  Viewpoint.hasOne(Reply, { as: "Reply", foreignKey: "id"});

  return {
    Census,
    Issue,
    Issue_LeaderAction,
    Leader,
    LeaderAction,
    Leaders_Organizations,
    Organization,
    RawVotes,
    Reply,
    Role,
    Tags,
    Test,
    User,
    User_Leaders,
    Users_Organizations,
    Viewpoint,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
