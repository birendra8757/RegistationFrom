const express = require('express');
const route = require('./Route/route.js');
const mongoose = require('mongoose');
const path=require('path')
const app = express();

app.use(express.json());
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect("mongodb+srv://birendra:Kumar123@cluster0.enhlifs.mongodb.net/reg-form", {
    useNewUrlParser: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => console.log("MongoDb is connected"))
.catch(err => console.log(err))
app.use('/', route)

app.listen(3000, function () {
    console.log('Express app running on port ' + (3000))
});
