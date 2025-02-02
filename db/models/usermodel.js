
import { DataTypes,Sequelize } from 'sequelize';
import { sequelize } from './../connectiondb.js';
 
 
 const usermodel = sequelize.define("user",
  {
     
   name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  },
);

export default usermodel

 