const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Member', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Organization',
        key: 'id'
      }
    },
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Profile',
        key: 'id'
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Member',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Member_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
