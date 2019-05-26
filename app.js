const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./routes/coin');
const port = process.env.PORT || 3000
const CapBit = require('./models/info');
const path = require('path');

app.listen(port ,()=>{
    console.log("server running at port ",port);
});

app.use("/info",router);
// staic 
if(process.env.NODE_ENV === 'production'){
 app.use(express.static('client/build'));
 app.get('*',(req,res)=>{
res.sendFile(path.join(__dirname, 'client','build','index.html'));
 });
}

mongoose.connect('mongodb://localhost/abc' || process.env.MONGODB_URI ,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;




