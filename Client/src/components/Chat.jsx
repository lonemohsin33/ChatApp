import { Avatar, Button, Container, Heading, HStack, IconButton, Input, Stack, VStack,Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { FaCross } from 'react-icons/fa'
import './chat.css'

import { user } from './HomePage'
import {io } from 'socket.io-client'
const ENDPOINT= 'http://localhost:3000/'

const Chat = () => {
    const socket = io(ENDPOINT, { transports: ['websocket'] })
    useEffect(() => {
         socket.on("connect", () => {
           alert("connected");
         });
        
    },[socket])
   
    return (
      <Container
        justifyContent={["flex-start", "center"]}
        maxW={["full", "container.lg"]}
        border={"1px solid"}
        minH={["100vh", "100vh"]}
        bgColor={"gray.200"}
        boxSizing={"border-box"}
      >
        <HStack
          minH={"12vh"}
          border={"1px solid"}
          justifyContent={"space-between"}
        >
          <Heading
            children={"Chat-App"}
            fontSize={["xl", "3xl"]}
            fontWeight={["medium", "bold"]}
            fontFamily={"cursive"}
          />
          <HStack spacing={["4", "6"]}>
            <Avatar size={["lg", "xl"]} />
            <Heading
              children={user}
              fontSize={["xl", "3xl"]}
              fontWeight={["medium", "bold"]}
              fontFamily={"cursive"}
            />
          </HStack>

          <IconButton>
            <FaCross />
          </IconButton>
        </HStack>
        <VStack minH={"75vh"} border={"1px solid"}></VStack>
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
            height={"12vh"}
            colorScheme={"blue"}
          >
            {" "}
            <Text className='txt' fontSize={['md','2xl']}>Send</Text>
          </Button>
        </HStack>
      </Container>
    );
}

export default Chat
