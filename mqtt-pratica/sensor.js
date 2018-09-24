let mqtt    = require('mqtt');
let cliente  = mqtt.connect('ws://localhost:9001');

cliente.on('connect', function () {
  console.log('conectado')
});

let intervalo = () => {
    let valor = Math.floor(Math.random()*100);
    cliente.publish('sensor/temperatura', ''+valor);
    console.log('msg: ',valor);
}

setInterval(intervalo, 2000);
//docker run -ti -p 1883:1883 -p 9001:9001 toke/mosquitto