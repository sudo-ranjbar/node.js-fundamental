// in commonJS modules there is no such export default crap
// we just dont put them in an object
// see

const myDefaultExportFunction = (name) => {
  console.log(`Hi ${name} I am exported defaultly`);
  
}

module.exports = myDefaultExportFunction // directly stored