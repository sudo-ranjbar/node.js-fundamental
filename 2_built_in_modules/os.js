const os = require('os');

// current user Info
const user = os.userInfo();
console.log(user);


// system uptime in second
console.log(`The system uptime is ${os.uptime()} seconds`);

// os Info
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),

}
console.log(currentOS);
