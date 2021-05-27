const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Organization', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    area: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image: {
      type: "BYTEA",
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Organization',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Organization_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
