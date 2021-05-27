const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Users_Organizations', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User',
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
    tableName: 'Users_Organizations',
    schema: 'public',
    timestamps: false
  });
};
