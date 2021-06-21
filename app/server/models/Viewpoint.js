const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Viewpoint', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    issueId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Issue',
        key: 'id'
      }
    },
    text: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pop_estimate: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    upvotes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User',
        key: 'id'
      }
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
