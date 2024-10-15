const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/grocery_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Database connection error'));

db.disconnect = async function() { 
    await mongoose.disconnect();
    console.log('Disconnected from database');
};

module.exports = db;