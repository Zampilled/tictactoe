"use client"

import {Box, Button, Center, Heading, HStack, VStack} from "@chakra-ui/react";
import Tile from "@/src/components/Tile";
import ResetGame from "@/src/components/ResetGame.tsx";


export default function TicTacToe({
                                      game_id,
    a1,
    a2,
    a3,
    b1,
    b2,
    b3,
    c1,
    c2,
    c3,
    game_state,
    user,
    x_uuid,
    o_uuid,
    turn,

    }){
    // Tic Tac Toe Component that displays a game
    if(game_state == 0) {
        return (
            <Box>
                <Center minWidth={"70vw"} minHeight={"70vh"}>
                <VStack>


                        <Heading>GAME ID {game_id}</Heading>
                        <Heading>{turn==1?x_uuid:o_uuid}'s Turn </Heading>
                        <Heading>({turn==1?"X":"O"} To Move)</Heading>
                    <HStack>
                        <Box>
                            <Tile tile_state={a1} tile_i={0} game_id={game_id} turn={turn} user={user} x_uuid={x_uuid} o_uuid={o_uuid}/>
                        </Box>
                        <Box>
                            <Tile tile_state={a2} tile_i={1} game_id={game_id} turn={turn} user={user} x_uuid={x_uuid} o_uuid={o_uuid}/>
                        </Box>
                        <Box>
                            <Tile tile_state={a3} tile_i={2} game_id={game_id} turn={turn} user={user} x_uuid={x_uuid} o_uuid={o_uuid}/>
                        </Box>
                    </HStack>
                    <HStack>
                        <Box>
                            <Tile tile_state={b1} tile_i={3} game_id={game_id} turn={turn} user={user} x_uuid={x_uuid} o_uuid={o_uuid}/>
                        </Box>
                        <Box>
                            <Tile tile_state={b2} tile_i={4} game_id={game_id} turn={turn} user={user} x_uuid={x_uuid} o_uuid={o_uuid}/>
                        </Box>
                        <Box>
                            <Tile tile_state={b3} tile_i={5} game_id={game_id} turn={turn} user={user} x_uuid={x_uuid} o_uuid={o_uuid}/>
                        </Box>
                    </HStack>
                    <HStack>
                        <Box>
                            <Tile tile_state={c1} tile_i={6} game_id={game_id} turn={turn} user={user} x_uuid={x_uuid} o_uuid={o_uuid}/>
                        </Box>
                        <Box>
                            <Tile tile_state={c2} tile_i={7}  game_id={game_id} turn={turn} user={user} x_uuid={x_uuid} o_uuid={o_uuid}/>
                        </Box>
                        <Box>
                            <Tile tile_state={c3} tile_i={8} game_id={game_id} turn={turn} user={user} x_uuid={x_uuid} o_uuid={o_uuid}/>
                        </Box>
                    </HStack>
                </VStack>
                </Center>

            </Box>
        )
    }else if(game_state == 1){
        return (
            <Center minWidth={"70vw"} minHeight={"70vh"}>
                <VStack>
                <Heading>
                    X'S WIN
                </Heading>
                <ResetGame id={game_id}/>
                </VStack>
            </Center>
        )
    }else if(game_state == 2) {
        return (
            <Center minWidth={"70vw"} minHeight={"70vh"}>
                <VStack>
                <Heading>
                    O'S WIN
                </Heading>
                <ResetGame id={game_id}/>
                </VStack>
            </Center>
        )}
    else if(game_state == 3){
        return (
            <Center minWidth={"70vw"} minHeight={"70vh"}>
                <VStack>
                <Heading>
                    DRAW
                </Heading>
                <ResetGame id={game_id}/>
                </VStack>
            </Center>
        )
    }else {
        return (
            <Box>

            </Box>
        )
    }

}