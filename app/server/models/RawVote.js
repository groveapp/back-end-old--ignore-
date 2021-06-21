const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RawVote', {
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
    issueId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Issue',
        key: 'id'
      }
    },
    viewpointId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Viewpoint',
        key: 'id'
      }
    },
    vote: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'RawVote',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "RawVote_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
