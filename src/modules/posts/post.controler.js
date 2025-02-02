import postmodel from "../../../db/models/postmodel.js"

export const getpost = async(req,res,next)=>{
   
    const post = await postmodel.findAll()

    res.status(201).json({msg:"done",post})
}

export const addpost = async(req,res,next)=>{

    const{title,description,price } = req.body

    const post = await postmodel.findOrCreate({

       where:{title,description,price}
      
    });

    if(!post[1]){
        
    res.status(400).json("post is exist")
        
    };

    res.status(201).json({msg:"added",post:post[0]});

};


export const updatepost = async(req,res,next)=>{
    
    const{title, description, price} = req.body

    const{ id } = req.params

    const post = await postmodel.update(
       
       { title,description,price},
      { where:{title: req.body.title}},
    )
    if(!post){
    res.status(400).json("post not exist")
        
    };

    res.status(201).json({msg:"added",post:post[0]});

};


export const deletepost = async(req,res,next)=>{
   
    const{ id } = req.params

    const post = await postmodel.destroy({ where:{ id:req.params.id}})

    if(!post){
    res.status(400).json("post not exist")
        
    };

    res.status(201).json({msg:"added",post});

};