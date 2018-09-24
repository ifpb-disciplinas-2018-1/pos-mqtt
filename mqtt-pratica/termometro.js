//http://mitsuruog.github.io/what-mqtt/
var mqtt    = require('mqtt');
var cliente  = mqtt.connect('ws://localhost:9001');
// var client  = mqtt.connect('tcp://localhost:1883');

cliente.on('connect', function () {
  cliente.subscribe('sensor/temperatura');
  console.log('conectado')
});

cliente.on('message', function (topic, message) {
  console.log("recebendo: ",message.toString());
});

// var enviar = true; 
// client.on('connect', function () {
//   client.subscribe('atuador/temperatura');
//   client.publish('atuador/temperatura', 'L');
//   console.log('conectado')
// });

// client.on('message', function (topic, message) {
//   console.log("recebendo:",message.toString());
//   enviar = message.toString() == "0";
 
// });

// var iv = setInterval( function() {
//   if(enviar){
//     var randInt = Math.floor(Math.random()*100);
//     client.publish('sensor/temperatura', ''+randInt);
//     console.log('msg:',randInt);
//   }
// }, 2000 );