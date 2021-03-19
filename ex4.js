const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);

async function getStuff() {
  console.log("Arquivo está sendo lido...");
  return await readFile("teste.txt", "binary");
}

getStuff().then((data) => {
  console.log(data);
});