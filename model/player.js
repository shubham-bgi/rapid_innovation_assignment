const mongoose = require('mongoose');

let PlayerSchema = new mongoose.Schema({
    name : {
        type : String,
        required: "Required"
    },
    matches_played : {
        type : Number,
        required : "Required"
    },
    wins : {
        type : Number,
        required : "Required"
    },
    losses : {
        type : Number,
        required : "Required"
    },
    draws : {
        type : Number,
        required : "Required"
    },
    sport : {
        type: String,
        required : "Required"
    },
    coach_id : {
        type: mongoose.Schema.Types.ObjectId, ref: 'Credentials',
        required: "Required"
    },
    created_date : {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Players", PlayerSchema)