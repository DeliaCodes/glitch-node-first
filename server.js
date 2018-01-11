// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const queryString = require('query-string');

const USERS = [
  {id: 1,
   firstName: 'Joe',
   lastName: 'Schmoe',
   userName: 'joeschmoe@business.net',
   position: 'Shopkeeper',
   isAdmin: true,
   password: 'password'
  },
  {id: 2,
   firstName: 'Sallie',
   lastName: 'Mary',
   userName: 'sallymary@gmail.com',
  position: 'engineer',
   isAdmin: false,
   password: 'password'
  },];



  const gateKeeper = (req, res, next) => {
// convert query into an object (is this needed?)
const query = queryString.parse(req.query);
    // compare the two - the Users database and

// 
  next();
  }
  
  app.get("/api/users/me", (req, res) => {
    if (req.user === undefined) {
      return res.status(401).json({message: 'Must Supply valid user credentials'});
    }
    const {firstName, lastName, id, userName, position} = req.user;
    return res.json({firstName, lastName, id, userName, position});
  });
  
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/dreams", function (request, response) {
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
