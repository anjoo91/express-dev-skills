var express = require('express');
var router = express.Router();

 // Require the controller that exports skills CRUD functions
 var skillsCtrl = require('../controllers/skills');

 // All actual paths begin with "/skills"
 // GET /todos
 router.get('/', skillsCtrl.index);

module.exports = router;
