//create items to insert into table per the process blog

var blogEntries = [];

class BlogEntry {
  constructor(bread, date, flour, salt, water, yeast, unitOfMeasurement, folds, foldCount, totalTimeHours, totalTimeMinutes, result) {
    this.bread = {};
    this.bread.S = bread;
    this.date = {}; 
    this.date.S = new Date(date).toDateString();
    this.flour = {};
    this.flour.N = flour.toString();
    this.salt = {};
    this.salt.N = salt.toString();
    this.water = {};
    this.water.N = water.toString();
    this.yeast = {};
    this.yeast.N = yeast.toString();
    this.unitOfMeasurement = {};
    this.unitOfMeasurement.S = unitOfMeasurement;
    this.folds = {};
    this.folds.BOOL = folds; 
    if (foldCount != null) {
      this.foldCount = {};
      this.foldCount.N = foldCount.toString(); 
    this.totalTimeHours = {};
    this.totalTimeHours.N = totalTimeHours.toString();
    this.totalTimeMinutes = {};
    this.totalTimeMinutes.N = totalTimeMinutes.toString();
    this.result = {};
    this.result.S = result;
    }
    this.month = {};
    this.month.N = new Date(date).getMonth().toString();
  }
}

blogEntries.push(new BlogEntry('50% Whole Wheat Bread with Biga', 'June 25 2020', 500, 22, 400, 3, 'grams', true, 3, 19, 45, 'Crisp. good rise due to banneton basket. Hearty and dense.'));
blogEntries.push(new BlogEntry('Harvest Bread with Poolish', 'May 29 2020', 500, 2, 390, 1.7, 'grams', true, 2, 16, 15, 'Decent, large bubbles. Good height and crisp crust. Like a healthy wheat bread with the lightness of white bread.'));
blogEntries.push(new BlogEntry('Overnight White Bread with Poolish', 'May 13 2020', 500, 10.5, 375, 1.7, 'grams', true, 3, 16, 15, 'Softer than normal, fendue shape of loaf was lost in baking, otherwise normal rise.'));


console.log(blogEntries);


////// starter code - populate your 'table'


var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = "us-east-1";
async = require('async')

var dynamodb = new AWS.DynamoDB();

async.eachSeries(blogEntries, function(value, callback) {

var params = {};
params.Item = value; 
params.TableName = "processBlog";

dynamodb.putItem(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
    setTimeout(callback, 1000); 
});