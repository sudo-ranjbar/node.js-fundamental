const fs = require('fs');

console.log('start');

fs.readFile('./exampleFolder/firstText.txt', 'utf8', (err, res) => {
  if (err) {
    console.log(err);
    return
  }
  console.log(res);
  const first = res;
  fs.readFile('./exampleFolder/secondText.txt', 'utf8', (err, res) => {
    if (err) {
      console.log(err);
      return
    }
    console.log(res);
    const second = res;
    fs.writeFile(
      './exampleFolder/asyncNewText.txt',
      `combining two texts: ${first} ${second}`,
      { flag: "a" },
      (err, res) => {
        if (err) {
          console.log(err);
          return
        }
        console.log('done with the writing task');
      }
    )

  })
})

console.log('starting the next task');