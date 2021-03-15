const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Responsibility', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'Responsibility',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Responsibility_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
