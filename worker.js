self.onmessage = function(e) {
  setInterval(function () {
    const date = new Date(),
      D = ('00' + date.getMilliseconds()).slice(-3);
    postMessage(D);
  }, 1);
};
