const sequelize = require("../db")

const User = sequelize.define('User', {
    email: {
      type: sequelize.Sequelize.DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: sequelize.Sequelize.DataTypes.STRING,
      allowNull: false
    },
    user_role: {
      type: sequelize.Sequelize.DataTypes.BOOLEAN,
      allowNull:false
    }
  }, {
    tableName: 'Users'
});


module.exports = User;