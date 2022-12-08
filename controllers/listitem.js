const connect = require('../database/db');
const listItemSchema = require("../models/listitem");
const { ObjectId } = require("mongodb");


exports.getAllListItems = (async(req,res)=>{
    try{
        var db = await connect(); 
        var listItem =db.model(process.env.DB_COLLECTION_2, listItemSchema);
        listItem.find({}, (err, items)=>{
            if(!err){
                res.send(items);
            }
            else{
                res.send(err.errors);
            }
        });
    }catch(e){
        res.send(e);
    }
});

exports.createListItem = (async(req,res)=>{
    try{
        var db = await connect(); 
        var ListItem =db.model(process.env.DB_COLLECTION_2, listItemSchema);
        var listItem = new ListItem({
            title:req.body.title,
            cost:req.body.cost,
            location:req.body.location,
            supplies:req.body.supplies,
            complete:req.body.complete,
            notes:req.body.notes,
            people:[]
        });
        await listItem.save();
        res.send(listItem);
    }catch(e){
        res.send(e.message);
    }
    
});
exports.getListItem = (async(req,res)=>{
    try{
        var db = await connect(); 
        var ListItem =db.model(process.env.DB_COLLECTION_2, listItemSchema);
        ListItem.findOne({ 
            _id:ObjectId(req.params)
          }).then(async (listItem) => {
            if (listItem) {
                res.send(listItem);
            } else {
              res.send("No Item exists with this name.");
            }
        });
    } catch(e){
            res.send(e.message);
    }
});
exports.updateListItem = (async(req,res)=>{
    try{
        var db = await connect(); 
        var ListItem =db.model(process.env.DB_COLLECTION_2, listItemSchema);
        ListItem.findByIdAndUpdate({ _id: ObjectId(req.params)},
      {$set: { title:req.body.title,
                cost:req.body.cost,
                location:req.body.location,
                supplies:req.body.supplies,
                complete:req.body.complete,
                notes:req.body.notes,
                people:[]}}, (err, item)=>{
      if(err){
          res.send(err.message);
      }else{
          res.status(500).json({status: 200,
                                message: "Update Successful."});
      }
  });
    } catch(e){
            res.send(e.message);
    }
});

exports.deleteListItem =  (async(req,res)=>{
    try{
        var db = await connect(); 
        var ListItem =db.model(process.env.DB_COLLECTION_2, listItemSchema);
        ListItem.findOneAndDelete({ _id: ObjectId(req.params.id )}, (err, list)=>{
            if(err){
                res.status(500).send(err.message);
            }else{
            res.send({message: "Delete was successful."});
            }
        });
    } catch(e){
            res.send(e.message);
    }
});
