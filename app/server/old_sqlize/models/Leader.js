const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Leader', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User',
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
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    approval_s: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_isapproval_s: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    est_approval: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    image: {
      type: "BYTEA",
      allowNull: true
    },
    party: {
      type: DataTypes.ENUM("Democratic","Green","Independent","Libertarian","Other","Republican","Unknown"),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Leader',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Leader_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
