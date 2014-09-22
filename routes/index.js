var express = require('express');
var router = express.Router();
var Twitter = require('mtwitter');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

var twitter = new Twitter({
    consumer_key: 'zJsVq5cwAjSrFt4RccFgCUOpm',
    consumer_secret: 'tryHm1O1KlJlX9tiIu6BCjear4cGwyDaqHXakZZGPhXYNEhe8Z',
    access_token_key: '19151896-q4zJoarAAu9T7fTNPsSr137YKSSQMoXVDo8s4fSyQ',
    access_token_secret: 'wISvLiYVOQBw9diQke3ADweSqgLGIgTmcZmFtk5VTCibQ'
});

twitter.get('statuses/home_timeline', {screen_name: 'kyleconkright'}, function(err, item) {
  console.log(err, item);
});

module.exports = router;
