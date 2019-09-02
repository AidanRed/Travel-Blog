var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

var visits=0;
router.get('/home.html',function(req,res){
    console.log('you are vistor'+visits);
    visits++;
});

router.get('/login.html', function(req,res){
    var utc = new Date().toJSON().slice(0,10);
    console.log(utc);
});

router.get('/register.html', function(req, res){
    console.log("This is a recent blog post!");
})
