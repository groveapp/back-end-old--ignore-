const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Viewpoint', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'Viewpoint',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Viewpoint_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
