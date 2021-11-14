const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sportsacademy", 
{ useNewUrlParser: true, useUnifiedTopology: true } , (e,db) =>{
    if(e) {
        console.log('Error - ',e.stack);
    }
    else {
        console.log('Successful Connection to database');
    }
});

module.exports = {
    Player: require("./player"),
    Credential: require("./credential")
}