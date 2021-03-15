const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Members_Organizations', {
    memberId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Member',
        key: 'id'
      }
    },
    organizationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Organization',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Members_Organizations',
    schema: 'public',
    timestamps: false
  });
};
