import {doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "@/src/lib/firebase/clientApp";
import checkBoard from "@/src/lib/checkBoard";


/**
 * Makes a Tic Tac Toe Move.
 * If the correct user invokes this method and it is that users turn it will alter the Firestore data to have that move
 * played by first pulling the data from the Firestore altering it and then pushing it.
 * Then it checks the board for any changes of game state using the checkBoard method.
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
            // If X user moves on X's go
            if (user.email == x_uuid) {
                let myData = await getDoc(doc(db, "games", game_id))
                let myDataProcessed = myData.data()
                // Change data to reflect X's move
                if (myDataProcessed) {
                    myDataProcessed.board[tile_i] = 1
                    myDataProcessed.turn = 2
                }
                setDoc(doc(db, "games", game_id), myDataProcessed)
                await checkBoard(game_id)
            }

        } else if (turn == 2) {
            // If O user moves on O's go
            if (user.email == o_uuid) {
                let myData = await getDoc(doc(db, "games", game_id))
                let myDataProcessed = myData.data()
                // Change data to reflect X's move
                if (myDataProcessed) {
                    myDataProcessed.board[tile_i] = 2
                    myDataProcessed.turn = 1
                }
                setDoc(doc(db, "games", game_id), myDataProcessed)
                await checkBoard(game_id)
            }
        }

    }
    return null
}

