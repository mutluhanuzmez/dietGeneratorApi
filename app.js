const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

require('dotenv/config');

app.use(bodyParser.json());

//Import Routes
const mealRoute = require('./routes/meal');
const ingredientRoute = require('./routes/ingredient');

app.use('/ingredient', ingredientRoute);
app.use('/meal', mealRoute);

//Middlewares
// app.use('/posts', () => {
//     console.log('This is middleware running');
// })


//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
})



//Connect To DB

mongoose.connect(process.env.DB_CONNECTION,
 { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to DB!')
  );

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("Connection Successful!");
});

//How to we start listening to the server
app.listen(3000);