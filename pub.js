var mqtt = require('mqtt') //require mqtt packgae
let client = mqtt.connect('mqtt:localhost:4883'); //make connection to mosca local mqtt broker

var topic = 'pahe';

client.on('connect', function () {
  client.subscribe(topic, function (err) {
    if (!err) {
      client.publish(topic, 'Hello mqtt'); //publish the messsage
    }
    client.end(); //close the client
  })
})


 
