const express = require('express'); // Express is our web server
const bodyParser = require('body-parser'); // Middleware to handle form data.
const cors = require('cors'); // A package to make request across different ports.

const PORT = 3000;
const app = express(); // Instance of express.
// Body parser to handle json data.
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
    res.send('Server is running');
});

app.post('/enroll', function (req, res) {
    console.log(req.body); // Contains user data that was submitted by the angular application.
    res.status(401).send({ "message": "Data Received" });
}); 

app.listen(PORT, function () {
    console.log('Server running on localhost : ' + PORT);
});
