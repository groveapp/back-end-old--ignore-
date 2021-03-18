const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Leaders_Organizations', {
    leaderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Leader',
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
    tableName: 'Leaders_Organizations',
    schema: 'public',
    timestamps: false
  });
};
