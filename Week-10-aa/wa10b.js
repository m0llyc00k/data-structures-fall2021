const { Client } = require('pg');
const fs = require('fs'),
      dotenv = require('dotenv');


var async = require('async');  
dotenv.config();  

var content = JSON.parse(fs.readFileSync('../Week-09/data/AAdataALL.json'));


// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'Molly';
db_credentials.host = 'ds-21.cpjfwihkx2vx.us-east-1.rds.amazonaws.com';
db_credentials.database = 'aa';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

var addressesForDb = content;
async.eachSeries(addressesForDb, function(value, callback) {
    const client = new Client(db_credentials);
    client.connect();
    var thisQuery = "INSERT INTO aa_meetings_final VALUES (E'" + value.thisMeeting.address + "'," + value.latLong.lat + ", " + value.latLong.long + ", " + value.thisMeeting.zipCode + ", " + value.thisMeeting.zone + ", E'" + value.thisMeeting.venue + "', E'" + value.thisMeeting.zipCode + "', E'" + value.thisMeeting.roomDetail + "', E'" + value.thisMeeting.directionDetail + "', E'" + value.thisMeeting.groupName + "', E'" + value.thisMeeting.wheelchairAccess + "', E'" + value.thisMeeting.miscDetails + "', E'" + value.thisMeeting.meetingDetails.day + "', E'" + value.thisMeeting.meetingDetails.trueStartTime + "', E'" + value.thisMeeting.meetingDetails.trueEndTime + "', E'" + value.thisMeeting.meetingDetails.meetingType + "', E'" + value.thisMeeting.meetingDetails.specialInerest + "');";
    client.query(thisQuery, (err, res) => {
        console.log(err, res);
        client.end();
    });
    setTimeout(callback, 1000); 
}); 