const skills = require('../models/skill');

module.exports = {
  index,
  new: showNewForm, //assigning new to showNewForm; avoids error for special nanmes
  create,
  show,
  delete: deleteSkill //assigning delete to deleteSkill; avoids error for special names
};

//show all elements of skills array on /skills
function index(req, res) {
  res.render('skills/index', {
    skills: skills.getAll()
  });
}

//render 'Add New Skill' form on skills/new
function showNewForm(req, res) {
  res.render('skills/new');
}

//from form (req.body) create new object & append
function create(req, res) {
  const newSkill = {
    id: generateUniqueId(),
    name: req.body.name,
    need: req.body.need === 'on' ? true : false
  };

  skills.add(newSkill);

  res.redirect('/skills');
}

//render skill properties on skills/:id
function show(req, res) {
  const skillId = req.params.id;
  const skill = skills.getSkillById(skillId);

  if (skill) {
    res.render('skills/show', { skill });
  } else {
    res.status(404).send('Skill not found');
  }
}

//remove from skills w/e corresponds with skills/:id
function deleteSkill(req, res) {
  const skillId = req.params.id;

  skills.remove(skillId);

  res.redirect('/skills');
}

function generateUniqueId() {
  return Date.now().toString();
}
