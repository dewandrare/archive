fetch('/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });
/*
if ('WebSocket' in window) {
    var socket = new WebSocket(address);
    socket.onmessage = function (msg) {
        console.log('WebSocket message received:', msg.data);
        if (msg.data == 'reload') window.location.reload();
        else if (msg.data == 'refreshcss') refreshCSS();
    };
}
    */