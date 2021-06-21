const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Leader', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    organizationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Organization',
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
    approvals: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disapprovals: {
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
      type: DataTypes.ENUM("Republican","Democratic","Independent","Libertarian","Green","Other","Unknown"),
      allowNull: true
    },
    votingRecord: {
      type: DataTypes.JSON,
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
