// note that the first trigger is also after 2 seconds
setInterval(()=>{
  console.log('hello');
  
}, 2000)

console.log('I will run first');

// process stays alive until process is killed or an error occurs
