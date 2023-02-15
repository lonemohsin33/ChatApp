import { Button, Container, FormLabel, Heading, HStack, Img, Input, Stack, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/img.png";



let user;
const HomePage = () => {
    const [input, setInput] = useState('')
    const handleClick = () => {
         user = input
       
        console.log('click')
    }

    return (
      <Stack
        justifyContent={["center", "center"]}
        alignItems={["flex-start", "center"]}
        direction={["column", "row"]}
        maxH={["100vh", ""]}
        spacing={"2"}
      >
        <Img src={logo} height={["150", "250"]} width={["150", "250"]} />
        <VStack
          spacing={["8", "16"]}
          p={"2"}
          minW={["50vh", "60vh"]}
          minH={["50vh", "80vh"]}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading
            children="Welcome to Chat App."
            fontFamily={"cursive"}
            fontWeight={"md"}
            colorScheme={"facebook"}
            size={["lg", "2xl"]}
          />
          <HStack justifyContent={"center"} alignItems={"center"}>
            <FormLabel
              minW={"24"}
              children={"Your Name"}
              fontFamily="cursive"
              alignItems={"center"}
              fontSize={["md", "lg"]}
              fontWeight={["medium", "bold"]}
              colorScheme={"facebook"}
            />
            <Input
              required
                        value={input}
                        onChange={e=>setInput(e.target.value)}
              placeholder={"lone"}
              outline={"none"}
              maxW={["36", "56"]}
              borderColor={"blue.500"}
              focusBorderColor={"blue.500"}
            />
          </HStack>
          <Link to={input==''?null:"/chat"}>
                    <Button
                        
                        width={["40", "50"]} colorScheme={"blue"} onClick={handleClick}>
              Enter Chat
            </Button>
          </Link>
        </VStack>
      </Stack>
    );
   
}

export {user}
export default HomePage

