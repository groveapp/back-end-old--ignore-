const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Profile', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'Profile',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Profile_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
