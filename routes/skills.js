var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new); // new route for displaying the form
router.post('/', skillsCtrl.create); // new route for skill creation
router.delete('/:id', skillsCtrl.delete); // new route for deleting a skill

module.exports = router;
