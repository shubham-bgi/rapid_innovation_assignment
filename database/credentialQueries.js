const Credential = require('../model').Credential;

class credentialQueries {

    static async fetchDocByUsername(username) {
        try {
            const credential = await Credential.findOne({ 
                username: username
            });
            return credential;
        }
        catch (error) {
            console.log(error);
            console.log(`************Got an error for ${username}************`);
        }
    }
}

module.exports = {
    credentialQueries
}