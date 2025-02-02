
import { DataTypes,Sequelize } from 'sequelize';
import { sequelize } from '../connectiondb.js';
import usermodel from './usermodel.js';
 
 
 const postmodel = sequelize.define("post",
  {
     
   title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
       
  },
);
postmodel.belongsTo(usermodel,{
  onDelete:"CASCADE",
  onUpdate:"CASCADE",
});
usermodel.hasMany(postmodel)

export default postmodel

 