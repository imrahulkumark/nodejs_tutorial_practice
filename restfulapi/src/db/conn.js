const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api")
.then( () => {
    console.log("connections is successful");
}).catch ( (err) => {
    console.log("No connection");
});