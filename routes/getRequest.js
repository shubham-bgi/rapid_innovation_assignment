const { verifyToken } = require('../jwt');

module.exports = (app, playerQueries) => {

    const mongoose = require('mongoose');

    app.get('/', verifyToken, async (req,res)=>{
        fetchPlayers(req,res);
    })
    
    async function fetchPlayers(req,res){
        let {name, sport} = req.query;
        let searchCriteria = {};
        if(req.authData.user.role === 'coach'){
            searchCriteria["coach_id"] = mongoose.Types.ObjectId(req.authData.user._id);
        }
        if(name) {
            searchCriteria["name"] = name;
        }
        if(sport) {
            searchCriteria["sport"] = sport;
        }
        const players = await playerQueries.getPlayers(searchCriteria);
        res.json(players);
    }
}