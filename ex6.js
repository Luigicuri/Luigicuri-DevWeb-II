const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);

function getStuff() {
    console.log("Lendo Arquivo");
    return readFile("teste.txt", "binary");
  }
  
  getStuff().then((data) => {
    console.log(data);
  });
  