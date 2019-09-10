const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = process.env.PORT || 3000;

// express routing
app.use(express.static('public'));


// signaling
io.on('connection', function (socket) {

    socket.on('create or join', function (room) {
        console.log('create or join to room ', room);
        
        const myRoom = io.sockets.adapter.rooms[room] || { length: 0 };
        const numClients = myRoom.length;

        console.log(room, ' has ', numClients, ' clients');

        if (numClients == 0) {
            socket.join(room);
            socket.emit('created', room);
        } else if (numClients == 1) {
            socket.join(room);
            socket.emit('joined', room);
        } else {
            socket.emit('full', room);
        }
    });

    socket.on('ready', function (room){
        socket.broadcast.to(room).emit('ready');
    });

    socket.on('candidate', function (event){
        socket.broadcast.to(event.room).emit('candidate', event);
    });

    socket.on('offer', function(event){
        socket.broadcast.to(event.room).emit('offer',event.sdp);
    });

    socket.on('answer', function(event){
        socket.broadcast.to(event.room).emit('answer',event.sdp);
    });

    socket.on('expected', function(event) {
        console.log(`expected file size: ${event.fileSize} ; name: ${event.name}`)
        socket.broadcast.to(event.room).emit('file', {fileSize: event.fileSize, name: event.name})
    })

    socket.on('leave', function (room) {
        socket.leave(room);
        console.log('left the room');
        socket.broadcast.to(room).emit('left');
    })

});

// listener
http.listen(port || 3000, function () {
    console.log('listening on', port);
});