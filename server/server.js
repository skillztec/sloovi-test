const express = require('express');
const mongoose = require('mongoose');
const dotenv = ('dotenv');
const slooviTaskUrl = require('./routes/api/tasks');
const cors = require('cors');


//init server
const app = express();

//bodyParser middlewares to allow 3rd party reqs
app.use(express.json());
app.use(cors());

//read env file
// dotenv.config();

//connect mongoDB
// mongoose.connect('mongoDB URI', {})
// .then(() => {
//   console.log("Sloovi-test mongoDB Successfully Connected!");
// }).catch(error =>{
//   console.log(error.message);
// });

//GET req test base path/URL
app.get('/', (req, res) => {
  res.send('Welcome To Chiedozie\'s Sloovi-Test App Server Solution!!!');
});

//POST req configured task base path route URL
app.use('/api/task', slooviTaskUrl);

const port = process.env.PORT || 5001; 

app.listen(port, () => console.log(`Sloovi-Test Server Is Runing On https://localhost:${port}`));