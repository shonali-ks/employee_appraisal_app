const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open',(err)=>{
    if(err)
        console.log("error in db connection");
    else
        console.log("db connected");
    
});
module.exports = mongoose;