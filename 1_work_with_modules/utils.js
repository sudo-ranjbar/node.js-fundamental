const name = 'Zahra'
const sayHi = (name) => {
  console.log(`hello ${name}`);
}

function sayBye(name) {
  console.log(`goodbye ${name}`);

}

module.exports.evening = function(name){
  console.log(`good evening ${name}`);
  
}

module.exports = { ...module.exports, sayHi, sayBye }