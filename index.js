const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use('/', express.static(__dirname + '/'));

const Person = {
    name: "Ellie",
}


app.get("/", (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});


//========================================//
/*
	SOCKET
*/
//========================================//
io.on("connection", (socket)=>{
    console.log("a user connected");
    socket.on('disconnect', function(){
        console.log('user disconnected');
      });
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    });

    socket.emit('an object', Person);
});






http.listen(3000, function(){
    console.log('listening on *:3000');
  });