var mongoose = require("mongoose");

var docSchema = new mongoose.Schema({
    speciality: String,
    handler_id:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"User"
    },
    workingAt: {
            type: String,
            ref:"Hospital",
            default:'Not Connected'
    },
    workAtHosp: {
       type: String,
       default: 'Not Connected'
    },
    timing: {
       timingFrom: Date,
       timingTo: Date
    },
    qual: String,
    experience: Number,
    tier: String,

});

module.exports = mongoose.model("Doctor", docSchema);