const express = require('express');
const app = express();
const PORT = 9000;
const playerQueries = require('./database').playerQueries;
const credentialQueries = require('./database/').credentialQueries;
const verify = require('./verify');

app.listen(PORT, ()=>{
    console.log(`Listening on the port http://localhost:${PORT}`);
})
app.use(express.json());

require('./routes/getRequest')(app, playerQueries, verify);
require('./routes/postRequest')(app, playerQueries, credentialQueries, verify);