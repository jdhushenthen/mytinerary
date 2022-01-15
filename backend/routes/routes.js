const router = require('express').Router();
var axios = require('axios');

const LOCATION = "Seattle";
const CATEGORY = "restaurant";
const API_KEY = 'rZz4DQe06UyMRcTToBVyQrOrkltbyZ5F8MvO3yW8vadGOo41iG8PZKoi_-HWV4p7LVSIOnXIctifKNQf_1sSsmbP1RkWKnAufcpA5p65jU4a4zSmqX03dzP_cfPgYXYx'
var bearer = 'Bearer ' + API_KEY;

var request_string = "https://api.yelp.com/v3/businesses/search" + "?term=" + CATEGORY + "&location=" + LOCATION;

router.route('/').get((req, res) => {
    console.log("API call")

    fetch(request_string, {
      method: 'GET',
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': bearer,
          'Content-Type': 'application/json',
      }
  })
  .then(res => console.log(res))
  .catch(err => console.log(err))
})

module.exports = router;






