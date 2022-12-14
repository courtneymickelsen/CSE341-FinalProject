const connect = require('../database/db.js');
const reminderSchema = require("../models/reminder");
const { ObjectId } = require("mongodb");
const dotenv = require("dotenv").config({path: '.env'});

exports.getAllReminders = (async(req,res)=>{
    try{
        var db = await connect(); 
        var reminder = db.model(process.env.DB_COLLECTION_4, reminderSchema);
        return reminder.find({}, (err,reminder)=>{
            if(err){
                res.send(err.message);
            }else{
                res.send(reminder);
            }
        });
    }catch(e){
        res.send(e.message);
    }
});

exports.getReminder = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Reminder = db.model(process.env.DB_COLLECTION_4, reminderSchema);
         return Reminder.findOne({ 
            _id:ObjectId(req.params)
          }).then(async (reminder) => {
            if (reminder) {
                res.send(reminder);
            } else {
              res.send("No matching reminder found.");
            }
        });
    }catch(e){
        res.send(e.message);
    }
});

exports.createReminder = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Reminder = db.model(process.env.DB_COLLECTION_4, reminderSchema);

        var rem = new Reminder({
            title:req.body.title,
            date:req.body.date,
            time:req.body.time,
            items:[]
        });    
        return await rem.save()
        .then((rem) => {
            res.send(rem);
        });
    }catch(e){
        res.send(e.message);
    }    
});    

exports.updateReminder = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Reminder = db.model(process.env.DB_COLLECTION_4, reminderSchema);
        return await Reminder.findByIdAndUpdate({ _id: ObjectId(req.params)},
        {$set: { title:req.body.title,
                date:req.body.date,
                time:req.body.time,
                items:[]}},
        {new: true})
        .then((rem, err) => {
            if(err){
                res.send(err.message);
            }else{
                res.status(200);
                res.send(rem);
            }
        });
    }catch(e){
        res.send(e.message);
    }
});

exports.deleteReminder = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Reminder = db.model(process.env.DB_COLLECTION_4, reminderSchema);
        return await Reminder.findOneAndDelete({ _id: ObjectId(req.params.id )})
        .then( (rem, err)=>{
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