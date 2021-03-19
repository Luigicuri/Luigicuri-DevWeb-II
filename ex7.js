const util = require("util");
let fs = require('fs');

const readFile = util.promisify(fs.readFile);

function getStuff() {
    console.log("Lendo o arquivo");
    return readFile("teste.txt", "binary");
  }
  
  getStuff().then((data) => {
    console.log(data);
  });

fs.unlink('teste.txt', function (err){
    if (err) throw err;
    console.log('Arquivo deletado');
})