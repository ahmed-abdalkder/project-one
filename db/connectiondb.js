
import { Sequelize } from "sequelize";


export const sequelize = new Sequelize('sequelize1', 'root', '', {

    host: 'localhost',
    dialect: "mysql"

  });

  const connectionDB = async()=>{

  return await sequelize.sync({alter:true}).then(()=>{ 

  console.log('Connection has been established successfully.');
  })
 .catch ((error)=> {

    console.error('Unable to connect to the database:', error);
  })

};

  export default connectionDB