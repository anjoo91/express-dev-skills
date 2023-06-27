const skills = [
    {id: 125223, name: 'HTML', need: true},
    {id: 127904, name: 'CSS', need: true},
    {id: 139608, name: 'JavaScipt', need: true},
    {id: 139611, name: 'Node.js', need: true},
    {id: 140602, name: 'REACT', need: false},
    {id: 141005, name: 'Python', need: false},   
    {id: 142566, name: 'Django', need: false},
  ];
  
  module.exports = {
    getAll
  };
  
  function getAll() {
    return skills;
  }