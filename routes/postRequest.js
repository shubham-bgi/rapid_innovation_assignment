module.exports = (app, playerQueries, credentialQueries, verify) => {

    const bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken');

    app.post('/', verify, async (req,res) => {
        jwt.verify(req.token, 'secretkey', async (err, authData) => {
            if(err || authData.user.role === "admin") {//admin can't add new player
                res.sendStatus(403);
            } else {
                let player = req.body;
                player["coach_id"] = authData.user._id;
                if(await playerQueries.pushNewPlayer(player)){
                    res.status(200).json({
                        message: 'Player Added...',
                        authData
                    })
                } else {
                    res.send('Some error Occured!');
                }
            }
        })
    });

    app.post('/login', async (req, res) => {
        const credential = req.body;
        const user = await credentialQueries.fetchDocByUsername(credential.username);
        const result = await bcrypt.compare(credential.password, user.password);
        if(!result) {
            res.send('Wrong Password!');
        } else {
            jwt.sign({user}, 'secretkey', {expiresIn:"24h"},(err, token) => {
                res.json({
                    token
                })
            })
        }
    });
}