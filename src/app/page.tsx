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
import CreateGame from "@/src/components/CreateGame";
import GameArchive from "@/src/components/GameArchive";
import MyGameList from "@/src/components/MyGameList";


export default async function Home() {

  return (
      <Center minHeight={"30vh"} minWidth={"100vw"} >
          <VStack>
              <Heading pb={6}>
                  TIC TAC TOE
              </Heading>
              {auth.currentUser ? (<CreateGame/>) : <Box></Box>}
              {/*{auth.currentUser ? (<MyGameList/>): <Box/>}*/}
              <GameList/>
              <GameArchive/>

          </VStack>
      </Center>


  );
}

