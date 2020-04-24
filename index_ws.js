const http =require('http');
const cors = require('cors');
const express = require('express');
const socketio=require('socket.io')
const app = express();
const server =http.createServer(app)
app.use(cors())
app.use(express.json())
const io =socketio(server)
io.on('connection',(client)=>{
console.log('new client');
client.on('message',(data)=>{

    console.log(data);
    io.emit('new-message',data);
})



})
server.listen(3000,()=>{

    console.info('server listening on port 3000')
    
    })