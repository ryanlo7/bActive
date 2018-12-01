var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    /**
        * Function to handle GET requests for index page.
        * Render the index page.
        * @param {Object} req The express routing HTTP client request object.
        * @param {Object} res The express routing HTTP client response object.
        * @param {callback} next The express routing callback function to invoke next middleware in the stack.
        * @return {Object} A JSON object that holds req, res, and next.
    */
    res.render('index', { title: 'B-Active' });
});

module.exports = router;
