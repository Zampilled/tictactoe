import {db, auth} from "@/src/lib/firebase/clientApp";
import {doc, setDoc} from "firebase/firestore";

export default  function createGame(x_user, o_user){
    const game_id = Math.floor(Math.random() * 100000)
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