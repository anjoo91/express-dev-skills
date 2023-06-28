const skills = [
  { id: 125223, name: 'HTML', need: true },
  { id: 127904, name: 'CSS', need: true },
  { id: 139608, name: 'JavaScipt', need: true },
  { id: 139611, name: 'Node.js', need: true },
  { id: 140602, name: 'REACT', need: false },
  { id: 141005, name: 'Python', need: false },
  { id: 142566, name: 'Django', need: false },
];

module.exports = {
  getAll,
  add, // function to 'add' new skills
  remove, // function to 'remove' old skills
};

function getAll() {
  return skills;
}

function add(newSkill) {
  skills.push(newSkill);
}

function remove(skillId) {
  const index = skills.findIndex(skill => skill.id === skillId);
  if (index !== -1) {
    skills.splice(index, 1);
  }
}
