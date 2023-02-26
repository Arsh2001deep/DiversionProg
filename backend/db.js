const mongoose = require('mongoose');

const mongoURI = "mongodb://mongo:p71ov7lra158fBHQnonL@containers-us-west-178.railway.app:5906";

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to mongoose successfully");
    })
}

module.exports = connectToMongo;