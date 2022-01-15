const router = require('express').Router()

router.route('/').get((req, res) => {
    console.log("API call")
})

module.exports = router;