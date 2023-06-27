const skill = require('../models/skill');

module.exports = {
    index,
};

function index(req, res) {
    res.render('skills/index',{
        skills: skill.getAll()
    });
};