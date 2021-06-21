const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Reply', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Viewpoint',
        key: 'id'
      }
    },
    text: {
      type: DataTypes.STRING,
      allowNull: true
    },
    agrees: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Reply',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Reply_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
