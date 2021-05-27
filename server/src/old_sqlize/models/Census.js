const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Census', {
    personId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    voterReg: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    voterRegLoc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ethnicity: {
      type: DataTypes.ENUM("2_or_more","amerind_ak","asian","black","latinx","other","pacific_islander","white"),
      allowNull: true
    },
    income: {
      type: DataTypes.ENUM("100k_110k","10k_20k","10k_30k","110k_120k","120k_130k","130k_140k","140k_150k","30k_40k","40k_50k","60k_70k","70k_80k","80k_90k","90k_100k","less_than_10k","more_than_150k"),
      allowNull: true
    },
    education: {
      type: DataTypes.ENUM("bachelor_degree","graduate_degree","high_school_d_iploma","less_high_school","some_college","some_graduate","some_high_school"),
      allowNull: true
    },
    party_affiliation: {
      type: DataTypes.ENUM("Democratic","Green","Independent","Libertarian","Other","Republican","Unknown"),
      allowNull: true
    },
    prim_language: {
      type: DataTypes.ENUM("chinese","english","french","german","other","spanish","tagalog","vietnamese"),
      allowNull: true
    },
    occupation: {
      type: DataTypes.ENUM("admin_support","armed_forces","construction_mining","farming_fishing_forestry","installation_maintenance_repair","management_business","manufacturing_production","not_employed_not_seeking","not_employed_seeking","professional","sales","self_employed","service","transportation"),
      allowNull: true
    },
    marital_status: {
      type: DataTypes.ENUM("d_ivorced","married","never_married","separated","widowed"),
      allowNull: true
    },
    numChildren: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Census',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Census_pkey",
        unique: true,
        fields: [
          { name: "personId" },
        ]
      },
    ]
  });
};
