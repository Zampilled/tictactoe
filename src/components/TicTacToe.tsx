"use client"

import {Box, Center, Heading, HStack, VStack} from "@chakra-ui/react";
import Tile from "@/src/components/Tile";
import ResetGame from "@/src/components/ResetGame.tsx";

/**
 * This component deals in rendering a specific Tic Tac Toe Game.
 * If a game is over it outputs the end scenario and the rematch button.
 * @param game_id - ID of the game being played
 * @param a1 - top left Tile state
 * @param a2 - top Tile state
 * @param a3 - top right Tile state
 * @param b1 - left Tile state
 * @param b2 - middle Tile state
 * @param b3 - right left Tile state
 * @param c1 - bottom left Tile state
 * @param c2 - bottom Tile state
 * @param c3 - bottom right Tile state
 * @param game_state - a number representing the current state of the game:
 *  0 for ongoing; 1 for X win; 2 for O win; and 3 for draw
 * @param user - the current user accessing thw component
 * @param x_uuid - the X player
 * @param o_uuid - the O player
 * @param turn - number representing whos turn it is: 1 for X and 2 for O
 * @constructor
 * @return The component of the full Tic Tac Toe Game
 */
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

                                  }) {
    // Checks the state of the game and renders accordingly
    if (game_state == 0) {
        // Game is ongoing
        return (<Box>
                <Center minWidth={"70vw"} minHeight={"70vh"}>
                    <VStack>


                        <Heading>GAME ID {game_id}</Heading>
                        <Heading>{turn == 1 ? x_uuid : o_uuid}'s Turn </Heading>
                        <Heading>({turn == 1 ? "X" : "O"} To Move)</Heading>
                        <HStack>
                            <Box>
                                <Tile tile_state={a1} tile_i={0} game_id={game_id} turn={turn} user={user}
                                      x_uuid={x_uuid} o_uuid={o_uuid}/>
                            </Box>
                            <Box>
                                <Tile tile_state={a2} tile_i={1} game_id={game_id} turn={turn} user={user}
                                      x_uuid={x_uuid} o_uuid={o_uuid}/>
                            </Box>
                            <Box>
                                <Tile tile_state={a3} tile_i={2} game_id={game_id} turn={turn} user={user}
                                      x_uuid={x_uuid} o_uuid={o_uuid}/>
                            </Box>
                        </HStack>
                        <HStack>
                            <Box>
                                <Tile tile_state={b1} tile_i={3} game_id={game_id} turn={turn} user={user}
                                      x_uuid={x_uuid} o_uuid={o_uuid}/>
                            </Box>
                            <Box>
                                <Tile tile_state={b2} tile_i={4} game_id={game_id} turn={turn} user={user}
                                      x_uuid={x_uuid} o_uuid={o_uuid}/>
                            </Box>
                            <Box>
                                <Tile tile_state={b3} tile_i={5} game_id={game_id} turn={turn} user={user}
                                      x_uuid={x_uuid} o_uuid={o_uuid}/>
                            </Box>
                        </HStack>
                        <HStack>
                            <Box>
                                <Tile tile_state={c1} tile_i={6} game_id={game_id} turn={turn} user={user}
                                      x_uuid={x_uuid} o_uuid={o_uuid}/>
                            </Box>
                            <Box>
                                <Tile tile_state={c2} tile_i={7} game_id={game_id} turn={turn} user={user}
                                      x_uuid={x_uuid} o_uuid={o_uuid}/>
                            </Box>
                            <Box>
                                <Tile tile_state={c3} tile_i={8} game_id={game_id} turn={turn} user={user}
                                      x_uuid={x_uuid} o_uuid={o_uuid}/>
                            </Box>
                        </HStack>
                    </VStack>
                </Center>

            </Box>)
    } else if (game_state == 1) {
        // X Wins
        return (<Center minWidth={"70vw"} minHeight={"70vh"}>
                <VStack>
                    <Heading>GAME ID {game_id}</Heading>
                    <Heading>(X) {x_uuid} VS {o_uuid} (O) </Heading>
                    <Heading>
                        X'S WIN
                    </Heading>
                    <ResetGame id={game_id}/>
                </VStack>
            </Center>)
    } else if (game_state == 2) {
        // O Wins
        return (<Center minWidth={"70vw"} minHeight={"70vh"}>
                <VStack>
                    <Heading>GAME ID {game_id}</Heading>
                    <Heading>(X) {x_uuid} VS {o_uuid} (O) </Heading>
                    <Heading>
                        O'S WIN
                    </Heading>
                    <ResetGame id={game_id}/>
                </VStack>
            </Center>)
    } else if (game_state == 3) {
        // Draw
        return (<Center minWidth={"70vw"} minHeight={"70vh"}>
                <VStack>
                    <Heading>GAME ID {game_id}</Heading>
                    <Heading>(X) {x_uuid} VS {o_uuid} (O) </Heading>
                    <Heading>
                        DRAW
                    </Heading>
                    <ResetGame id={game_id}/>
                </VStack>
            </Center>)
    } else {
        // Error State
        return (<Box>

            </Box>)
    }

}