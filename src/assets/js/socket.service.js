(function(){
  const sock = new SockJS('http://18.217.120.226:8080/room');

  sock.onopen = function() {
    console.log('open');
    // sock.send('');
  };

  // sock.onmessage = function(e) {
  //   console.log('message', e.data);
  //   sock.close();
  // };

  // sock.onclose = function() {
  //   console.log('close');
  // };
})();
