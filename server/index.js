const express= require("express")
const cors= require('cors')
const {Server} = require("socket.io")
const http = require("http");
const app = express();

const server = http.createServer(app)
const io = new Server(server)


app.use(cors())
const users=[{}]
io.on('connection', (socket) => {
    console.log("user connected")
    socket.on('joined', (data) => {
        users[socket.id] = data.user
        console.log(`${data.user} has Joined`)
        socket.broadcast.emit('userjoined', { user: 'Admin: ', message: `${users[socket.id]} has Joined the chat` });
         socket.emit("welcome", {
           user: "Admin ",
           message: `welcome to the chat ,${users[socket.id]}`,
         });
    })
    socket.on('disconnect', () => {
        socket.broadcast.emit("leave", {
          user: "Admin ",
          message: `${users[socket.id]} has Left the chat`,
        });
        console.log('user Left')
    })
    socket.on('message', ({chat,id}) => {
        io.emit('sendMessage', {user:users[id], message:chat,id})
        console.log(chat,id)
    })
   
    
})

app.get('/', (req, res) => {
    console.log("welcome this is homepage!")
})




server.listen(process.env.PORT||3000, () => {
    console.log(`server is listening on port ${process.env.PORT || 3000}`)
})
