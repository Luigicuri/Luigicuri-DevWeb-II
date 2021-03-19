var events = require("events");
var eventEmitter = new events.EventEmitter();

var myEventHandlerGerar = function () {
  const randow = (num) => Math.floor(Math.random() * num);
  console.log(randow(11));
};

var myEventHandlerDia = function () {
  var data = new Date();
  var dia = data.getDate();
  console.log(dia);
};

eventEmitter.on("teste1", myEventHandlerGerar);

eventEmitter.emit("teste1");

eventEmitter.on("teste2", myEventHandlerDia);

eventEmitter.emit("teste2");