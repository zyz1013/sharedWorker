Worker.onmessage = function(event) {
  console.log("message" + event.data);
  doSomething();
};

function doSomething() {
  Worker.postMessage("Work done!");
}
