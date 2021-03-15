var DataTypes = require("sequelize").DataTypes;
var _Leader = require("./Leader");
var _LeaderAction = require("./LeaderAction");
var _Leaders_Organizations = require("./Leaders_Organizations");
var _Member = require("./Member");
var _Members_Organizations = require("./Members_Organizations");
var _Organization = require("./Organization");
var _Page = require("./Page");
var _Profile = require("./Profile");
var _Responsibility = require("./Responsibility");
var _Viewpoint = require("./Viewpoint");

function initModels(sequelize) {
  var Leader = _Leader(sequelize, DataTypes);
  var LeaderAction = _LeaderAction(sequelize, DataTypes);
  var Leaders_Organizations = _Leaders_Organizations(sequelize, DataTypes);
  var Member = _Member(sequelize, DataTypes);
  var Members_Organizations = _Members_Organizations(sequelize, DataTypes);
  var Organization = _Organization(sequelize, DataTypes);
  var Page = _Page(sequelize, DataTypes);
  var Profile = _Profile(sequelize, DataTypes);
  var Responsibility = _Responsibility(sequelize, DataTypes);
  var Viewpoint = _Viewpoint(sequelize, DataTypes);

  LeaderAction.belongsTo(Leader, { foreignKey: "id"});
  Leader.hasOne(LeaderAction, { foreignKey: "id"});
  Leaders_Organizations.belongsTo(Leader, { foreignKey: "leaderId"});
  Leader.hasMany(Leaders_Organizations, { foreignKey: "leaderId"});
  Leaders_Organizations.belongsTo(Organization, { foreignKey: "organizationId"});
  Organization.hasMany(Leaders_Organizations, { foreignKey: "organizationId"});
  Member.belongsTo(Organization, { foreignKey: "id"});
  Organization.hasOne(Member, { foreignKey: "id"});
  Member.belongsTo(Profile, { foreignKey: "profileId"});
  Profile.hasMany(Member, { foreignKey: "profileId"});
  Members_Organizations.belongsTo(Member, { foreignKey: "memberId"});
  Member.hasMany(Members_Organizations, { foreignKey: "memberId"});
  Members_Organizations.belongsTo(Organization, { foreignKey: "organizationId"});
  Organization.hasMany(Members_Organizations, { foreignKey: "organizationId"});
  Page.belongsTo(Organization, { foreignKey: "id"});
  Organization.hasOne(Page, { foreignKey: "id"});

  return {
    Leader,
    LeaderAction,
    Leaders_Organizations,
    Member,
    Members_Organizations,
    Organization,
    Page,
    Profile,
    Responsibility,
    Viewpoint,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
