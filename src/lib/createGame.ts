import {db, auth} from "@/src/lib/firebase/clientApp";
import {doc, setDoc} from "firebase/firestore";

/**
 * Creates a game given 2 users emails.
 * Initializes an empty game with the two users and returns the game id.
 * @param x_user - X players email
 * @param o_user - O players email
 * @return Number - the ID of the initialized game
 */
export default  function createGame(x_user, o_user){
    const game_id = Math.floor(Math.random() * 10000000)
    const myData = {
        "id": game_id,
        "board": [0,0,0,0,0,0,0,0,0],
        "game_state": 0,
        "x_uuid": x_user,
        "o_uuid": o_user,
        "turn": 1,
        "replay_id": -1,
        "active": true
    }
    setDoc(doc(db, "games", String(game_id)), myData).then(r => {})
    return game_id
}