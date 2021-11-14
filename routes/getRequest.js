module.exports = (app, playerQueries, verify) => {

    const jwt = require('jsonwebtoken');
    const mongoose = require('mongoose');

    app.get('/', verify, async (req,res)=>{
        let {name, sport} = req.query;
        jwt.verify(req.token, 'secretkey', async (err, authData) => {
            if(err) {
                return res.sendStatus(403);
            } 
            let searchCriteria = {};
            if(authData.user.role === 'coach'){
                searchCriteria["coach_id"] = mongoose.Types.ObjectId(authData.user._id);
            }
            if(name) {
                searchCriteria["name"] = name;
            }
            if(sport) {
                searchCriteria["sport"] = sport;
            }
            const players = await playerQueries.getPlayers(searchCriteria);
            res.json(players);
        })
    })
}