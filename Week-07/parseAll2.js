// npm install cheerio

var fs = require('fs');
var cheerio = require('cheerio');

// load the thesis text file into a variable, `content`
// this is the file that we created in the starter code from last week
var fileFolder = 'data/';
var fileNumber = [
    'm01.txt',  
    'm02.txt',  
    'm03.txt',  
    'm04.txt',  
    'm05.txt',  
    'm06.txt',  
    'm07.txt',  
    'm08.txt',  
    'm09.txt',  
    'm10.txt'
    ];


    fileNumber.forEach(address => { 
    // load the AA meeting text file into a variable, `content`\
    // for (let j = 0; j < fileNumber.length; j++){
    var content = fs.readFileSync(fileFolder + address);
    // }
    
// load `content` into a cheerio object
var $ = cheerio.load(content);

//call all 'td' tags
$('tr').each(function(i, elem) {
//only show td tags with the below style 
    if ($(elem).attr('style')=='margin-bottom:10px') {
        //replace anything after '-' ',' '(' with nothing // split lines by tabs and turn into an array // remove all other arrays that dont have the address
        var address = $(elem).html().split('<br>')[2].trim().split(',')[0]
        var roomDetail = $(elem).html().split('<br>')[2].split(',')[1].trim();
        var directionDetail = $(elem).html().split('<br>')[3].split('NY')[0].split('100')[0].split('(')[1];
            if (directionDetail != null && directionDetail!= undefined) {
                var directionDetail = $(elem).html().split('<br>')[3].split('NY')[0].split('100')[0].split('(')[1].split(')')[0];
            }
        // var meetingType = 
        var venue = ($(elem).html().split('<b>')[0].split('>')[1].split('<')[0].trim());
        var groupName = ($(elem).html().split('<br>')[1].split('>')[1].split('<')[0].trim().split('(:I')[0].trim());
        // var day = 
        // var startTime =
        // var endTime =
        // var specialInterest =
        var wheelchairAccess = $(elem).text().match(/(Wheelchair access)/);
             if (wheelchairAccess != null && wheelchairAccess != undefined) {
                var wheelchairAccess = 'yes';
            };
        
        // var meetingOnHolidays =
            console.log(directionDetail);
        }
        
     
});


})


