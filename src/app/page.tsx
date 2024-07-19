"use client"
import {auth} from "@/src/lib/firebase/clientApp"


import {
    Box,
    Button,
    Center,
    Heading,
    Modal, ModalBody, ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    VStack
} from "@chakra-ui/react";

import GameList from "@/src/components/GameList";


export default async function Home() {

  return (
      <Center minHeight={"30vh"} minWidth={"100vw"} >
          <VStack>
              <Heading pb={6}>
                  TIC TAC TOE
              </Heading>
              <GameList id={"haii"}/>
              <test/>
              {auth.currentUser ? (<Button>Create New Game</Button>) : <Box></Box>}


          </VStack>
      </Center>


  );
}

