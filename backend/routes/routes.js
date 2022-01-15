const router = require('express').Router();
var axios = require('axios');

router.route('/').get((req, res) => {
    console.log("API call")

    var config = {
        method: 'get',
        url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyBb7FEXrVL74mRG3TFjm-IOoxVKv9a9Pf8',
        headers: { }
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
