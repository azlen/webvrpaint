var connect = require('connect');
var serveStatic = require('serve-static');
var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server
connect().use(serveStatic("./")).listen(3000, "192.168.21.18");


wss = new WebSocketServer({ port: 8080, host: "0.0.0.0" });

wss.on('connection', function connection(ws) {
  console.log('connection 8080');
})

wsss = new WebSocketServer({ port: 8079 });

wsss.on('connection', function connection(ws) {
  console.log('connection 8079');
  ws.on('message', function incoming(message) {
    console.log('sending data to 8080');
    wss.clients.forEach(function broadcast(client) {
      client.send(message);
    })
  })
})

/*wss.on('connection', function(ws) {
  console.log('connection');

  var controller = Leap.loop({
    enableGestures: true,
  }, function(frame) {
    ws.send(JSON.stringify(frame));
  })

  ws.on('close', function() {
    constroller.disconnect();
  })
});*/

/*

var ws = new WebSocket('ws://127.0.0.1:6437/v6.json');

ws.on('message', function(data, flags) {
  wss.path = 'v6.json';
  wss.clients.forEach(function each(client) {
    client.send(data);
  });
});


var ws2 = new WebSocket('ws://127.0.0.1:6437');

ws2.on('message', function(data, flags) {
  wss.path = null;
  wss.clients.forEach(function each(client) {
    client.send(data);
  });
});

*/
