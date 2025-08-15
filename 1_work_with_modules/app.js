console.log(require('./export_names_at_the_end'));
const names = require('./export_names_at_the_end');
const names2 = require('./export_names_when_created');
const { sayHi, sayBye, evening } = require('./utils');

// this is how we require default exports
const whateverNameIwant = require('./default_export');
console.log(whateverNameIwant);


// calling some utils function
sayHi('ali');
sayBye('ali');
evening('abbas');

// logging some names from other files/modules
console.log(names);
console.log(names.peter, 'from names group one');
console.log(names2);
console.log(names2.peter, 'from names group two');

// we call a function that is invoked in a module, only with require it
// the interesting thing is 
require('./invoke_by_require')