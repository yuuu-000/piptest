self.onmessage = function(e) {
    const date = new Date();
    const milliseconds = ("00" + date.getMilliseconds()).slice(-3);
    postMessage({ data: milliseconds });
};
