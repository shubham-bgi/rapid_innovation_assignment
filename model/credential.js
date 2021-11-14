const mongoose = require('mongoose');

let CredentialSchema = new mongoose.Schema({
    username : {
        type : String,
        required: "Required"
    },
    password : {
        type : String,
        required : "Required"
    },
    role : {
        type : String,
        required : "Required"
    }
})

module.exports = mongoose.model("Credentials", CredentialSchema)