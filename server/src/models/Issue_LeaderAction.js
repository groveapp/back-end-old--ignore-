const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Issue_LeaderAction', {
    issueId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Issue',
        key: 'id'
      }
    },
    actionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'LeaderAction',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Issue_LeaderAction',
    schema: 'public',
    timestamps: false
  });
};
