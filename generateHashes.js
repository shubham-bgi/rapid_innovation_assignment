//File to generate hashes for passwords, this will be useful for sign-up
const bcrypt = require('bcryptjs');

bcrypt.genSalt().then( salt => {
    bcrypt.hash('thebestcoach', salt).then(hash => {
        console.log(hash)
    })
})