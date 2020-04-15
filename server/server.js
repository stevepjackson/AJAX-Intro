// requires
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// globals
const port = 5000;
// uses
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));
// spin up server
app.listen(port, () => {
    console.log('server up on:', port);
});
// get route
const people = ['Friend', 'Guy', 'Pal'];

app.get('/tester', (req, res) => {
    console.log('in /tester GET');
    res.send(people);
});

app.post('/tester', (req, res) => {
    console.log('got to POST /tester', req.body);
    people.push(req.body.name);
    console.log(people);
    res.send('woof');
});

