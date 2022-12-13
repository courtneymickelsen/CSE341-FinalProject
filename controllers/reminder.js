const connect = require('../database/db');
const reminderSchema = require("../models/reminder");
const { ObjectId } = require("mongodb");
const dotenv = require("dotenv").config({path: '.env'});

exports.getAllReminders = (async(req,res)=>{
    try{
        var db = await connect(); 
        var reminder = db.model(process.env.DB_COLLECTION_4, reminderSchema);
        reminder.find({}, (err,reminder)=>{
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


exports.createReminder = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Reminder =db.model(process.env.DB_COLLECTION_4, reminderSchema);

        var rem = new Reminder({
            title:req.body.title,
            date:req.body.date,
            time:req.body.time,
            items:[]
        });
        await rem.save();
        res.send(rem);
    }catch(e){
        res.send(e.message);
    }
});


exports.getReminder = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Reminder =db.model(process.env.DB_COLLECTION_4, reminderSchema);
        Reminder.findOne({ 
            _id:ObjectId(req.params)
          }).then(async (reminder) => {
            if (reminder) {
                res.send(reminder);
            } else {
              res.send("No Reminder Found.");
            }
        });
    }catch(e){
        res.send(e.message);
    }
});



exports.updateReminder = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Reminder =db.model(process.env.DB_COLLECTION_4, reminderSchema);
        Reminder.findByIdAndUpdate({ _id: ObjectId(req.params)},
        {$set: {title:req.body.title,
                date:req.body.date,
                time:req.body.time,
                items:[]}}, (err, reminder)=>{
        if(err){
            res.send(err.message);
        }else{
            res.status(500).sendStatus(200);
        }
    });
    }catch(e){
        res.send(e.message);
    }
});

exports.deleteReminder = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Reminder =db.model(process.env.DB_COLLECTION_4, reminderSchema);
        Reminder.findOneAndDelete({ _id: ObjectId(req.params.id )}, (err, reminder)=>{
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