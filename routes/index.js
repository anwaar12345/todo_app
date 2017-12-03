var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('HOME', { title:'HOME'});
});

router.get('/page', function(req, res, next) {
  res.render('page', { title: 'PAGE' });
});

router.get('/add/todo', function(req, res, next) {
  res.render('add_todo', { title: 'Add todo' });
});

router.post('/create/todo', function(req, res, next) {
  console.log("post request fetch", req.body);
  res.render('todo_list', { title: 'My TODO_LIST',data:req.body });
});
 

module.exports = router;
