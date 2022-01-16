const router = require('express').Router();
var axios = require('axios');

const LOCATION = "Seattle";
const CATEGORY = "restaurant";
const API_KEY = 'rZz4DQe06UyMRcTToBVyQrOrkltbyZ5F8MvO3yW8vadGOo41iG8PZKoi_-HWV4p7LVSIOnXIctifKNQf_1sSsmbP1RkWKnAufcpA5p65jU4a4zSmqX03dzP_cfPgYXYx'

/* for yelp api, the following attributes from the api will be used:
name
review_count
rating
coordinates - for google distance matrix
location -> display
price
phone
*/

/* for yelp api, the following terms will be available to the user:
PARKS -> 150 minutes
ENTERTAINMENT -> 150 minutes
TOURS -> maybe use, could just give a list of potential tours but not include in itinerary
NIGHTLIFE -> 9 - 12
RESTAURANTS -> 90 minutes at lunch/dinner
SHOPPING -> 120  minutes

Relaxed -> 1 activity after lunch 
Moderate -> 1 activity in the morning + 1 activity after lunch
Busy -> 1 activity in the morning + 2 activities after lunch

Commute times from Google?

Schedule:
9 - 12: 1 activity
12 - 1:30: Lunch
1:30 - 6:30: 2 activities
6:30 - 8: Dinner
*/

/*
  var bearer = 'Bearer ' + API_KEY;
  var request_string = "https://api.yelp.com/v3/businesses/search" + "?term=" + CATEGORY + "&location=" + LOCATION;
  var config = {
    method: 'get',
    url: request_string,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': bearer,
      'Content-Type': 'application/json',
    }
  };

  axios(config)
    .then(function (response) {
      data = JSON.parse(JSON.stringify(response.data));
      console.log(data.businesses[0]);
    })
    .catch(function (error) {
      console.log(error);
    });
*/

router.route('/').get((req, res) => {
  // User Preferences
  const RELAXED = 1;
  const MODERATE = 2;
  const BUSY = 3;

  var lastLocation = LOCATION;
  var categories = ["Parks", "Entertainment", "Shopping", "Restaurants", "Nightlife"];
  var busy_preference = BUSY
  var res = filterInterests(categories)
  var hasRestaurant = res.restaurant
  var hasNightlife = res.nightlife

  var counter = {
                  "Parks": 0, 
                  "Entertainment": 0, 
                  "Shopping": 0,
                  "Restaurants": 0,
                  "Nightlife": 0
                }
  var itinerary = {
                    activity1 : null,
                    lunch : null,
                    activity2 : null,
                    activity3 : null,
                    dinner : null,
                    night : null,
                  }

  // ACTIVITY 1
  if (busy_preference != RELAXED) {
    var rand = Math.floor(Math.random() * categories.length);
    var category = categories[rand]
    itinerary.activity1 = searchBusinesses(category, lastLocation, counter[category])
    
    lastLocation = itinerary.activity1.location
    counter[category] = counter[category] + 1
  }

  // LUNCH
  if (hasRestaurant) {
    var category = "Restaurants"
    itinerary.lunch = searchBusinesses(category, lastLocation, counter[category])
    
    lastLocation = itinerary.lunch.location
    counter[category] = counter[category] + 1
  }

  // ACTIVITY 2
  var rand = Math.floor(Math.random() * categories.length);
  var category = categories[rand]
  itinerary.activity2 = searchBusinesses(category, lastLocation, counter[category])
    
  lastLocation = itinerary.activity2.location
  counter[category] = counter[category] + 1

  // ACTIVITY 3
  if (busy_preference == BUSY) {
    var rand = Math.floor(Math.random() * categories.length);
    var category = categories[rand]
    itinerary.activity3 = searchBusinesses(category, lastLocation, counter[category])
      
    lastLocation = itinerary.activity3.location
    counter[category] = counter[category] + 1
  }

  // DINNER
  if (hasRestaurant) {
    var category = "Restaurants"
    itinerary.dinner = searchBusinesses(category, lastLocation, counter[category])
    
    lastLocation = itinerary.dinner.location
    counter[category] = counter[category] + 1
  }

  // NIGHTLIFE
  if (hasNightlife) {
    var category = "Nightlife"
    itinerary.night = searchBusinesses(category, lastLocation, counter[category])
    
    lastLocation = itinerary.night.location
    counter[category] = counter[category] + 1
  }

  //console.log(itinerary)
})

function filterInterests(interests) {
  hasRestaurant = false
  hasNightlife = false

  ind = interests.indexOf("Restaurants")
  if (ind > -1) {
    interests.splice(ind, 1)
    hasRestaurant = true
  }

  ind = interests.indexOf("Nightlife")
  if (ind > -1) {
    interests.splice(ind, 1)
    hasNightlife = true
  }

  return {restaurant: hasRestaurant, nightlife: hasNightlife}
}

function searchBusinesses(category, location, i) {
  var config = {
    method: 'get',
    url: "https://api.yelp.com/v3/businesses/search" + "?term=" + category + "&location=" + location + "&radius=3000",
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + API_KEY,
      'Content-Type': 'application/json',
    }
  };

  axios(config)
    .then(function (response) {
      var data = JSON.parse(JSON.stringify(response.data));
      var res = data.businesses[i]
      var obj = {
                  name: res.name,
                  review_count: res.review_count,
                  rating: res.rating,
                  location: res.location.display_address.join(", "),
                  price: res.price,
                  phone: res.phone
                }
      console.log(obj)
      return obj
    })
    .catch(function (error) {
      console.log(error);
      return null
    });
}

module.exports = router;






