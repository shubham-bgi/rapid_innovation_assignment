const Player = require('../model').Player;

class playerQueries {

    static async getPlayers(searchCriteria) {
        try {
            const players = await Player.aggregate([
                { 
                    $match: searchCriteria
                },
                { 
                    $project: { 
                        name: "$name",
                        matches_played: "$matches_played",
                        wins: "$wins",
                        losses: "$losses",
                        draws: "$draws",
                        sport: "$sport",
                        coach_id: "$coach_id",
                        efficiency: {$divide: ["$wins", "$matches_played"]}
                    }
                },
                {
                    $sort: {
                        efficiency: -1
                    }
                }
                ]);
            return players;
        }
        catch (error) {
            console.log(error);
            console.log(`************Got an error for ${sport}************`);
        }
    }

    static async pushNewPlayer(player) {
        const playerToBeAdded = new Player(player)
        try {
            await playerToBeAdded.save();
            return true;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    }
}

module.exports = {
    playerQueries
}