"use client"
import {auth} from "@/src/lib/firebase/clientApp"
import {
    Box,
    Center,
    Heading,
    VStack
} from "@chakra-ui/react";

import GameList from "@/src/components/GameList";
import CreateGame from "@/src/components/CreateGame";
import GameArchive from "@/src/components/GameArchive";
import MyGameList from "@/src/components/MyGameList";


export default function Home() {
    // Main Page of the project that displays basic functionality
  return (
      <Center minHeight={"30vh"} minWidth={"100vw"} >
          <VStack >
              <Heading pb={6}>
                  Choose Option:
              </Heading>
              {auth.currentUser ? (<CreateGame/>) : <Box></Box>}
              {auth.currentUser ? (<MyGameList/>): <Box/>}
              <GameList/>
              <GameArchive/>

          </VStack>
      </Center>


  );
}

