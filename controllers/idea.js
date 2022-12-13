const connect = require('../database/db');
const ideaSchema = require("../models/idea");
const { ObjectId } = require("mongodb");
const dotenv = require("dotenv").config({path: '.env'});

exports.getIdeas = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Idea = db.model(process.env.DB_COLLECTION_3, ideaSchema);
        Idea.find({}, (err, idea)=>{
            if(err){
                res.send(err.message);
            }else{
                res.send(idea);
            }
        });
    }catch(e){
        res.send(e.message);
    }
});

exports.getIdea = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Idea = db.model(process.env.DB_COLLECTION_3, ideaSchema);
        return Idea.findOne({ 
            _id:ObjectId(req.params)
        }).then(async (idea) => {
            if (idea) {
                res.send(idea);
            } else {
                res.send("No Idea Found.");
            }
        });
    }catch(e){
        res.send(e.message);
    }
});

exports.createIdea = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Idea = db.model(process.env.DB_COLLECTION_3, ideaSchema);
        var idea = new Idea({
            title:req.body.title
        });
        return idea.save()
        .then(
            res.send(idea)
        );
    }catch(e){
        res.send(e.message);
    }
});

exports.updateIdea = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Idea = db.model(process.env.DB_COLLECTION_3, ideaSchema);
        return await Idea.findByIdAndUpdate({ _id: ObjectId(req.params)},
        {$set: {title:req.body.title}})
        .then((idea, err) => {
            if(err){
                res.send(err.message);
            }else{
                res.status(200);
                res.send(idea);
            }
        }
    );
    }catch(e){
        res.send(e.message);
    }
});

exports.deleteIdea = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Idea =db.model(process.env.DB_COLLECTION_3, ideaSchema);
        return await Idea.findOneAndDelete({ _id: ObjectId(req.params.id )})
        .then((idea, err)=>{
            if(err){
                res.status(500).send(err.message);
            }else{
                res.send({message: "Delete was successful."});
            }
        });
    }catch(e){
        res.send(e.message);
    }
});
