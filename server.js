const express = require('express');
const app = express();
const PORT = 9000;
const playerQueries = require('./database').playerQueries;
const credentialQueries = require('./database/').credentialQueries;

app.listen(PORT, ()=>{
    console.log(`Listening on the port http://localhost:${PORT}`);
})
app.use(express.json());

require('./routes/getRequest')(app, playerQueries);
require('./routes/postRequest')(app, playerQueries, credentialQueries);