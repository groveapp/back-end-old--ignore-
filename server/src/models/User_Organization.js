const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User_Organization', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true
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
