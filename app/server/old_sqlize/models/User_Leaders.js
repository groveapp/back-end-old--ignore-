const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User_Leaders', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    leaderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Leader',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'User_Leaders',
    schema: 'public',
    timestamps: false
  });
};
