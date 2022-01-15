const router = require('express').Router();
var axios = require('axios');

const LOCATION = "Seattle";
const CATEGORY = "restaurant";
const API_KEY = 'rZz4DQe06UyMRcTToBVyQrOrkltbyZ5F8MvO3yW8vadGOo41iG8PZKoi_-HWV4p7LVSIOnXIctifKNQf_1sSsmbP1RkWKnAufcpA5p65jU4a4zSmqX03dzP_cfPgYXYx'

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
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
})

module.exports = router;






