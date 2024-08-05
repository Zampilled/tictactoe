import {doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "@/src/lib/firebase/clientApp";
import checkBoard from "@/src/lib/checkBoard";


/**
 * Makes a Tic Tac Toe Move.
 * If the correct user invokes this method and it is that users turn it will alter the Firestore data to have that move
 * played by first pulling the data from the Firestore altering it and then pushing it
 * @param tile_i - ID of the tile being played
 * @param game_id - ID of the game being played
 * @param turn - which players turn it is
 * @param user - the current user making the move
 * @param x_uuid - X players email
 * @param o_uuid - O players email
 * @return null
 */
export default async function makeMove(tile_i, game_id, turn, user, x_uuid, o_uuid) {
    if (user) {
        if (turn == 1) {
            if (user.email == x_uuid) {
                let myData = await getDoc(doc(db, "games", game_id))
                let myDataNew = myData.data()
                if (myDataNew) {
                    myDataNew.board[tile_i] = 1
                    myDataNew.turn = 2
                }
                setDoc(doc(db, "games", game_id), myDataNew)
                await checkBoard(game_id)
            }

        } else if (turn == 2) {
            if (user.email == o_uuid) {
                let myData = await getDoc(doc(db, "games", game_id))
                let myDataNew = myData.data()
                if (myDataNew) {
                    myDataNew.board[tile_i] = 2
                    myDataNew.turn = 1
                }
                setDoc(doc(db, "games", game_id), myDataNew)
                await checkBoard(game_id)
            }
        }

    }
    return null
}

