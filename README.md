# ChatApp
This is a chatApp created using react vite with chakra ui framework and express and Socketio.

### Features
1. Uses Express as the application Framework.
2. Real-time communication between a client and a server using Socket.io.
3. Multiple users can connect at the same time.

### Socket 

1. Having an active connection opened between the client and the server so client can send and receive data. This allows real-time communication using TCP sockets. This is made possible by Socket.io.

2. The client starts by connecting to the server through a socket(maybe also assigned to a specific namespace). Once connections is successful, client and server can emit and listen to events.


### Vite
I have used Vite for the project. Due to its quick creation and reload time it is the best tool to have if your device has low  performance.
It reduces the loading time when making changes, which is great foe getting things done quickly. 


### Cors
I have used CORS for the integration of frontend and backend. 

### React-Hooks
I have react-Hooks like useEffect and useState for keeping the track of state and for message rendering. 

### Chakra UI
This is a  simple, modular and accessible component library that gives us the building blocks we need to build the React applications.

### npm run dev 
you can use this command in the client to run the development server.



Since this is just a project created for the practice it doesn't have much functionalities. 
