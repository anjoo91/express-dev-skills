const skills = require('../models/skill');

module.exports = {
  index,
  new: showNewForm,
  create,
  show,
  delete: deleteSkill
};

function index(req, res) {
  res.render('skills/index', {
    skills: skills.getAll()
  });
}

function showNewForm(req, res) {
  res.render('skills/new');
}

function create(req, res) {
  const newSkill = {
    id: generateUniqueId(),
    name: req.body.name,
    need: req.body.need === 'on' ? true : false
  };

  skills.add(newSkill);

  res.redirect('/skills');
}

function show(req, res) {
  const skillId = req.params.id;
  const skill = skills.getSkillById(skillId);

  if (skill) {
    res.render('skills/show', { skill });
  } else {
    res.status(404).send('Skill not found');
  }
}

function deleteSkill(req, res) {
  const skillId = req.params.id;

  skills.remove(skillId);

  res.redirect('/skills');
}

function generateUniqueId() {
  return Date.now().toString();
}
