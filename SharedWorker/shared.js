let portList = [];
onconnect = function(e) {
  const port = e.ports[0];
  port.onmessage = function() {
    if (portList.indexOf(port) === -1) {
      portList.push(port);
    }
  };
  port.start();
};

setTimeout(function() {
  portList.forEach(function(port) {
    port.postMessage("4444");
  });
}, 5000);
