const socketIO = require("socket.io")
const server = require("../../server")
const io = socketIO(server)
var Socket = function(socket) {
    this.room = access.room;
    this.message = access.message;
    this.table = access.table;


};


Socket.new_brodcast_action = function(room, _message, _action, _table) {

    console.log(_message)

    io.sockets.on('connection', function(socket) {
        console.log(socket)
        socket.on(room, function(room) {
            socket.join(room)
            console.log(room)
        });

        socket.on(room, ({ room, message, table }) => {
            socket.broadcast.to(room).emit(room, {
                message: _message,
                table: _table
            })
        })


    });

}
module.exports = Socket;