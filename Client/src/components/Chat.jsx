import { Avatar, Button, Container, Heading, HStack, IconButton, Input, Stack, VStack,Text } from '@chakra-ui/react'
import React, { useEffect, useState, useRef} from 'react'
import {  FaRegTimesCircle } from "react-icons/fa";
import ScrollToBottom from 'react-scroll-to-bottom'
import './chat.css'

import { user } from './HomePage'
import {io } from 'socket.io-client'
import Message from './Message'
const ENDPOINT = 'http://localhost:3000/'


let socket;

const Chat = () => {
  const [chat, setChat] = useState('')
  const [id, setId] = useState('');
  const [message, setMessage] = useState([])
  const [usera, setUser]= useState('')
  const dummy = useRef(null);
  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const send = () => {
    socket.emit('message', { chat,id })
    setChat('')
  }
    
  useEffect(() => {


     socket = io(ENDPOINT, { transports: ["websocket"] });

    socket.on("connect", () => {
      //  alert("connected");
      setUser(user)
      setId(socket.id)

           
    });
    socket.emit("joined", { user });
      
    socket.on('welcome', (data) => {
      setMessage([...message, data])
      console.log(data.user, data.message)
    })
    socket.on('userjoined', (data) => {
       setMessage([...message, data]);
      console.log(data.user, data.message)
        
    });
    socket.on('leave', (data) => {
       setMessage([...message, data]);
      console.log(data.user, data.message)
    })
    return () => {
      socket.disconnect();
      socket.off();
      
    
    } 
  }, [])
  useEffect(() => {
    socket.on('sendMessage', (data) => {
       setMessage([...message, data]);
      console.log(data.user, data.message, data.id)
    })
    return () => {
      socket.off();
    }
  },[message])
   
    return (
      <Container
        justifyContent={["flex-start", "center"]}
        maxW={["full", "container.lg"]}
        border={"1px solid"}
        minH={["100vh", "100vh"]}
        boxSizing={"border-box"}
      >
        <HStack
          minH={"12vh"}
          // border={"1px solid"}
          borderBottom={"0.01em solid "}
          justifyContent={"space-between"}
        >
          <Heading
            children={"Chat-App"}
            fontSize={["xl", "3xl"]}
            fontWeight={["medium", "bold"]}
            fontFamily={"cursive"}
          />
          <HStack spacing={["4", "6"]}>
            
            <Heading
              children={user}
              fontSize={["xl", "3xl"]}
              fontWeight={["medium", "bold"]}
              fontFamily={"cursive"}
            />
          </HStack>

          <FaRegTimesCircle size={'28'} className={'close'} />
        
        </HStack>
        <Stack
          style={{ height: "74vh", overflowY: "scroll" }}
          className="chatbox"
        >
          <div>
            {message.map((item, i) => (
              <Message
                message={item.message}
                user={item.id === id ? null : item.user}
                classs={item.id === id ? "right" : "left"}
                key={i}
              />
            ))}
          </div>
          <div ref={dummy} />
        </Stack>
        <HStack
          minH={"12vh"}
          margin={"0"}
          padding={"1"}
          justifyContent={"center"}
          alignItems={"center"}
          boxSizing={"border-box"}
        >
          <Input
            required
            margin={"0"}
            height={"12vh"}
            width={"80%"}
            padding={"3"}
            value={chat}
            onChange={(e) => setChat(e.target.value)}
            fontFamily={"cursive"}
            fontSize={["md", "lg"]}
            outline={"none"}
            focusBorderColor="blue.100"
            border={"none"}
            fontWeight={["medium", "bold"]}
          />
          <Button
            width={"20%"}
            m={"0"}
            p="0"
            onClick={send}
            height={"12vh"}
            colorScheme={"blue"}
          >
            {" "}
            <Text className="txt" fontSize={["md", "2xl"]}>
              Send
            </Text>
          </Button>
        </HStack>
      </Container>
    );
}

export default Chat
