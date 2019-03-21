//====================
//SETUP
//====================

//Installise Variable
var request = require("request");

//====================
//CODE
//====================

//Requesting Sunrise time for Kadugodi location
request("https://api.sunrise-sunset.org/json?lat=12.9908&lng=77.7608&date=today&formatted=0", function(err, response, body) {
  if(!err && response.statusCode == 200) {
    //Parsing JSON value
    var data = JSON.parse(body);
    //The value from request is in UTC, So slicing out hours and minutes and +5:30 to Match Indian Time zone
    //slicing out Sun rise Hour
    var mins = Number(data.results.sunrise.slice(14,16)) + 30;
    //slicing out Sun rise Hour
    var hour = Number(data.results.sunrise.slice(11,13)) + 5;
    //If minutes value gets more than 60, subtract it with 60, and increment hour by 1
    if(mins >= 60) {
      mins -= 60;
      hour++;
    }
    //Display the result
    console.log("In Kadugodi, Bangalore, today sunrise time is " + hour + ":" + mins + " AM ");
  } else {
      //Display error id found
      console.log("Something went wrong!");
      console.log(error);
  }
});

//Requesting Sunrise time for Villapuram location
request("https://api.sunrise-sunset.org/json?lat=9.8952&lng=78.1208&date=today&formatted=0", function(err, response, body) {
  if(!err && response.statusCode == 200) {
    //Parsing JSON value
    var data = JSON.parse(body);
    //The value from request is in UTC, So slicing out hours and minutes and +5:30 to Match Indian Time zone
    //slicing out Sun rise Hour
    var mins = Number(data.results.sunrise.slice(14,16)) + 30;
    //slicing out Sun rise Hour
    var hour = Number(data.results.sunrise.slice(11,13)) + 5;
    //If minutes value gets more than 60, subtract it with 60, and increment hour by 1
    if(mins >= 60) {
      mins -= 60;
      hour++;
    }
    //Display the result
    console.log("In Villapuram, Madurai, today sunrise time is " + hour + ":" + mins + " AM ");
  } else {
      //Display error id found
      console.log("Something went wrong!");
      console.log(error);
  }
});
