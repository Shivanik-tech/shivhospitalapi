const mongoose = require('mongoose');


//connect to DB
mongoose.connect("mongodb://shivanikri:shivanikri@123@cluster0.2sdsuoa.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true ,useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to db"));

db.once('open', function () {
    console.log("Successfully connected to db");
});