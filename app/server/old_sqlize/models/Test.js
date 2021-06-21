const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Test', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Test',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Test_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
