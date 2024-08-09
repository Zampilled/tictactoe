import {doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "@/src/lib/firebase/clientApp";

/**
 * Checks if 3 tiles are not empty and are the same (ie. a winner triplet) it returns the winning state as a number
 * @param x - first tile
 * @param y - second tile
 * @param z - third tile
 * @return Number - if 0 it is not a winning triplet otherwise it returns the number of the winner.
 */
export function checkTriplet(x,y,z){
    if (x>0 && y>0 && z>0) {
        if (x == y && y == z) {
            return x
        }
    }
    return 0
}

/**
 * Checks all columns of the Tic Tac Toe Board.
 * Uses the checkTriplet method on each column
 * @param board - the array of the board to be checked
 * @return Number - winner number if there is one or 0 if no winner
 */
export function checkCol(board){
    for (let i = 0; i < 3; i++) {
        if (checkTriplet(board[i], board[i+3], board[i+6]) > 0){
            return board[i]
        }
    }
    return 0
}

/**
 * Checks all rows of the Tic Tac Toe Board.
 * Uses the checkTriplet method on each row
 * @param board - the array of the board to be checked
 * @return Number - winner number if there is one or 0 if no winner
 */
export function checkRow(board){
    for (let i = 0; i < 7; i+=3) {
        if (checkTriplet(board[i], board[i+1], board[i+2])> 0){
            return board[i]
        }
    }
    return 0
}

/**
 * Checks all the diagonals of the Tic Tac Toe Board.
 * Uses the checkTriplet method on each row
 * @param board - the array of the board to be checked
 * @return Number - winner number if there is one or 0 if no winner
 */
export function checkDiag(board){
    if (checkTriplet(board[0], board[4], board[8])> 0){
        return board[0]
    }
    if (checkTriplet(board[2], board[4], board[6])> 0){
        return board[2]
    }

    return 0
}

/**
 * Checks if the current board is a draw by checking if all the tiles are used
 * @param board -  the array of the board to be checked
 * @return boolean - is the game a draw
 */
export function checkDraw(board){
    for (let i = 0; i < board.length; i++) {
        if (board[i] == 0){
            return false
        }
    }
    return true
}

/**
 * Pushes an end game state to the Firebase datastore.
 * @param winner - who is the winner: 1 means X winner; 2 means O winner; 3 means draw
 * @param id - ID of the game being played
 * @param data - current game data
 */
export function pushWinner(winner,id,data){
    data.game_state=winner
    data.active=false
    setDoc(doc(db, "games", id), data)
}

/**
 * Checks the board state.
 * It does this by checking the games columns, rows, and diagonal, and draw state then pushes a game state change if there is one.
 * @param id - ID of the game to be checked.
 * @return 0 if incomplete; 1 if X win; 2 if 0 win; 3 if draw
 */
export default async function checkBoard(id){
    const docRef = doc(db, "games", id)
    const data = await getDoc(docRef)
    const processed_data = data.data()
    const board = processed_data.board
    const checkColumnResult = checkCol(board)
    const checkRowResult = checkRow(board)
    const checkDiagResult = checkDiag(board)
    if (checkColumnResult > 0){
        pushWinner(checkColumnResult, id, processed_data)
    }else if(checkRowResult > 0){
        pushWinner(checkRowResult, id, processed_data)
    }else if(checkDiagResult > 0){
        pushWinner(checkDiagResult, id, processed_data)
    }else if(checkDraw(board)){
        pushWinner(3, id, processed_data)
    }
}
