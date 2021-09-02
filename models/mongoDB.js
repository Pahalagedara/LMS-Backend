const mongoose = require('mongoose');

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open",() => {
    console.log("Mongodb connected");
})

module.exports = connection;
