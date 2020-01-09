const mongoose = require('mongoose');

const db = () => {
    mongoose.Promise = global.Promise;
    try {
        mongoose.connect('mongodb://localhost:27017/jogga', {useNewUrlParser: true, useCreateIndex: true,});
        console.log('connection database successful')
    } catch(err) {
         console.log('databaseError:', err.message)
    }
    
}


module.exports = db;