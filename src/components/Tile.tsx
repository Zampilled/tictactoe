import {Button, Center, Heading} from "@chakra-ui/react";
import makeMove from "@/src/lib/makeMove";

export default function Tile({tile_state, tile_i, game_id, turn, user, x_uuid, o_uuid}){
    function handleClick(){
        makeMove(tile_i, game_id, turn, user, x_uuid, o_uuid)
    }
    if(tile_state == 0){
        return(
            <Button minWidth={"10vh"} minHeight={"10vh"} onClick={handleClick}>

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