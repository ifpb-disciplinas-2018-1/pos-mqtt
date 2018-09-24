var mqtt    = require('mqtt');
var client  = mqtt.connect('ws://iot.eclipse.org:80/ws');
// var client  = mqtt.connect('ws://localhost:9001');

client.on('connect', function () {
  // Se inscrevendo no topic sensor/temperatura
  client.subscribe('sensor/temperatura');
  console.log('conectado')
});

client.on('message', function (topic, message) {
  console.log("recebendo: ",message.toString());
});
 