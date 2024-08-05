"use client"
import {Button,} from "@chakra-ui/react";
import {db, auth} from "@/src/lib/firebase/clientApp";
import createGame from "@/src/lib/createGame";
import {useRouter} from 'next/navigation'
import {useCollectionData} from "react-firebase-hooks/firestore";
import {doc, setDoc} from "firebase/firestore";
import {collection, query, where} from "@firebase/firestore";

/**
 * Component to deal with the Reset of a game.
 *
 * This component takes the form of two different buttons:
 *
 * If a rematch doesn't exist the button displays as a "Rematch". When clicked this will create a game with the players roles switches.
 * It will also add the rematch id to the game data and redirect the user to the rematch.
 *
 * If a rematch exists the button will display "Join Rematch". When clicked it will redirect the client to the rematch.
 *
 * @param id - id of the game that is being reset
 * @constructor
 * @return The Rematch Button
 */
export default function ResetGame({id}) {
    const router = useRouter()
    let [game_data] = useCollectionData(query(collection(db, "games"), where("id", "==", Number(id))))
    let current_user = auth.currentUser

    /**
     * Handles the resetting of games.
     *
     * First checks if the user a clicking the button has the right to rematch the game.
     * Then creates a new game using the createGame() method with the roles flipped (X is now O and O is now X).
     * Then adds the new game id to the game data of the existing game.
     * Finally it pushes the client to the new game.
     *
     * @param game_data - All data related to the current game
     * @param router - the nextjs router used to redirect user
     * @param current_user - the user calling the function
     */
    function onClick(game_data, router, current_user) {
        if(current_user){
            if(current_user.email == game_data[0].o_uuid || current_user.email == game_data[0].x_uuid) {
                const new_id = createGame(game_data[0].o_uuid, game_data[0].x_uuid)
                game_data[0].replay_id = new_id
                setDoc(doc(db, "games", id), game_data[0])
                router.push("/game/" + String(new_id))
            }
        }
    }

    if (game_data) {
        if (game_data.length > 0) {
            return (
                <>
                    {
                        game_data[0].replay_id != -1 ?
                        (
                            <Button onClick={() => router.push("/game/" + String(game_data[0].replay_id))}>Join
                                Rematch</Button>
                        )
                        :
                            (
                            <Button onClick={() => onClick(game_data, router, current_user)}>Rematch</Button>
                            )
                    }
                </>
            )
        }
    } else {
        return (
            <></>
        )
    }
}

