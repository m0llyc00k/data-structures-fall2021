
// dependencies
const fs = require('fs'),
      querystring = require('querystring'),
      got = require('got'),
      async = require('async'),
      dotenv = require('dotenv');


var content = fs.readFileSync('prettyAddress.json');

console.log(content)

