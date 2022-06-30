const express = require('express');
const http = require('http');
const dotenv = ('dotenv'); //.config();


//init server
const app = express();

//middleware to allow 3rd party post req
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome To Chiedozie\'s Sloovi-Test App Server Solution');
});

//configured task routes
app.use('./api/task', require('./routes/api/tasks'));

const port = process.env.PORT || 5001; 

app.listen(port, () => console.log(`Sloovi-Test Server Is Runing On https://localhost:${port}`));