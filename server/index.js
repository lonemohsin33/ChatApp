const express= require("express")
const cors= require('cors')
const {Server} = require("socket.io")
const http = require("http");
const app = express();

const server = http.createServer(app)
const io = new Server(server)


app.use(cors())

io.on('connection', (socket) => {
    console.log("user connected")
    
})

app.get('/', (req, res) => {
    console.log("welcome this is homepage!")
})




server.listen(process.env.PORT||3000, () => {
    console.log(`server is listening on port ${process.env.PORT || 3000}`)
})
