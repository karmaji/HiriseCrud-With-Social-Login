var Sequelize = require("sequelize");
var DataTypes = Sequelize;
module.exports = (sequelize,Sequelize) => {
  const user = sequelize.define("hirises", {
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
        type: DataTypes.STRING,
      },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    university: {
        type: DataTypes.STRING,
      },
    degree: {
        type: DataTypes.STRING,
    },
    code: {
      type: DataTypes.STRING,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
    socialid: {
        type: DataTypes.STRING,
      },
    provider: {
        type: DataTypes.STRING,
    },
  });

  return user;
};
