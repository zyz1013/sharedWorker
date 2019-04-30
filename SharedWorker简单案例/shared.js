let portList = []; // 有多少个页面分享SharedWorker
onconnect = function(e) {
  const port = e.ports[0];
  port.addEventListener(function() {
    if (portList.indexOf(port) === -1) {
      portList.push(port);
    }
  }, false);
  port.start();
};
// 群发消息
setTimeout(function() {
  portList.forEach(function(port) {
    port.postMessage("4444");
  });
}, 5000);
