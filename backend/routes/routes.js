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
PARKS ->  
ENTERTAINMENT ->
TOURS -> maybe use, could just give a list of potential tours but not include in itinerary
NIGHTLIFE -> 
RESTAURANTS ->
SHOPPING -> 
*/

router.route('/').get((req, res) => {
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
})

module.exports = router;






