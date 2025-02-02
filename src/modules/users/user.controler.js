import usermodel from "../../../db/models/usermodel.js"

export const getuser = async(req,res,next)=>{
   
    const user = await usermodel.findAll()

    res.status(201).json({msg:"done",user})
};

export const adduser = async(req,res,next)=>{

    const{name, email, password, age} = req.body

    const user = await usermodel.findOrCreate({

       where: {  name, email, password, age}
      
    });

    if(!user[1]){

    res.status(400).json("user is exist")
        
    };

    res.status(201).json({msg:"added",user:user[0]});

};


export const updateuser = async(req,res,next)=>{

    const{name, email, password, age} = req.body

    const{ id } = req.params

    const user = await usermodel.update(
       
       { name,email,password,age},
      { where: {email:req.body.email}},
    )
    if(!user){ 

      res.status(400).json("user not exist")
        
    };

    res.status(201).json({msg:"added",user:user[0]});

};


export const deleteuser = async(req,res,next)=>{
   
    const{ id } = req.params

    const user = await usermodel.destroy({ where: { id:req.params.id}})

    if(!user){

    res.status(400).json("user not exist")
        
    };

    res.status(201).json({msg:"added",user});

};