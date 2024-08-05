import {Button, Center, Heading} from "@chakra-ui/react";
import makeMove from "@/src/lib/makeMove";

/**
 * One Tile of the Tic Tac Toe game.
 * Takes all data related to the Tile and If already played relays an X,O, or E. The first 2 are valid game state while E is an error state.
 * If the tile hasn't been played it renders a button which when pressed invokes the makeMove method with the move details.
 * @param tile_state - number that dictates how the tile is displayed: 0 for hasn't been played; 1 for X; 2 for O; and anything else returns an error state.
 * @param tile_i - the location of the tile on the board
 * @param game_id - the id of the game belonging to the greaater Tic Tac Toe game.
 * @param turn - Which players turn it is.
 * @param user - The current user that is logged in.
 * @param x_uuid - The email of the X player
 * @param o_uuid - the email of the O player
 * @constructor
 * @return A Tile Component
 */
export default function Tile({tile_state, tile_i, game_id, turn, user, x_uuid, o_uuid}){
    if(tile_state == 0){
        return(
            <Button minWidth={"10vh"} minHeight={"10vh"} onClick={() => makeMove(tile_i, game_id, turn, user, x_uuid, o_uuid)}>

            </Button>
        )
    }else if(tile_state == 1){
        return(
            <Center minWidth={"10vh"} minHeight={"10vh"}>
            <Heading fontSize={"7vh"}>
                X
            </Heading>
            </Center>
        )
    }else if(tile_state == 2){
        return (
            <Center minWidth={"10vh"} minHeight={"10vh"}>
                <Heading fontSize={"7vh"}>
                O
            </Heading>
            </Center>
        )
    }else {
        return(
            <Heading>
                E
            </Heading>
        )
    }
}