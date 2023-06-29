var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new); // new route to render new.ejs
router.post('/', skillsCtrl.create); // new route for creating a new skill
router.get('/:id', skillsCtrl.show); // new route to render show.ejs
router.get('/:id/edit', skillsCtrl.edit); // new route for editing a skill
router.put('/:id', skillsCtrl.update); // new route for updating a skill
router.delete('/:id', skillsCtrl.delete); // new route for deleting a skill

module.exports = router;
