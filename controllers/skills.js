const skill = require('../models/skill');

module.exports = {
    index,
    new: showNewForm, // assigned 'new' to 'showNewForm' to avoid conflict with reserved keyword
    create,
    delete: deleteSkill // assigned delete' to 'deleteSkill' to avoid conflict with reserved keyword
};

function index(req, res) {
    res.render('skills/index', {
        skills: skill.getAll()
    });
}

function showNewForm(req, res) {
    res.render('skills/new');
}

function create(req, res) {
    const newSkill = {
        id: generateUniqueId(), // unique ID 
        name: req.body.name,
        need: req.body.need === 'on' ? true : false //need box is checked, then true, else false
    };

    skill.add(newSkill); // push new skill to the array

    res.redirect('/skills'); // redirect to index view
}

function deleteSkill(req, res) {
    const skillId = req.params.id;

    skill.remove(skillId); // remove skill from array

    res.redirect('/skills'); // redirect to index view
}

// generate unique id
function generateUniqueId() {
    return Date.now().toString();
}
