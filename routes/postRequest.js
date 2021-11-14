const { createToken, verifyToken, getJWTTokenDetails } = require('../jwt');

module.exports = (app, playerQueries, credentialQueries) => {

    const bcrypt = require('bcryptjs');

    app.post('/', verifyToken, async (req,res) => {
        createPlayer(req,res);
    });

    app.post('/login', async (req, res) => {
        login(req,res);
    });

    async function createPlayer(req,res){
        if(req.authData.user.role === "admin") {//admin can't add new player
            res.sendStatus(403);
        } else {
            let player = req.body;
            player["coach_id"] = req.authData.user._id;
            if(await playerQueries.pushNewPlayer(player)){
                res.status(200).json({
                    message: 'Player Added...',
                    authData: req.authData
                })
            } else {
                res.send('Some error Occured!');
            }
        }
    }

    async function login(req,res){
        const credential = req.body;
        const user = await credentialQueries.fetchDocByUsername(credential.username);
        const result = await bcrypt.compare(credential.password, user.password);
        const jwtTokenDetails = getJWTTokenDetails(user);
        if(!result) {
            res.send('Wrong Password!');
        } else {
            createToken(res,jwtTokenDetails);
        }
    }
}