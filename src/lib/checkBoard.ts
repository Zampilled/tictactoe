import {doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "@/src/lib/firebase/clientApp";

function checkTriplet(x,y,z){
    // checks if 3 tiles are not empty and are the same ie. a winner triplet
    if (x>0 && y>0 && z>0) {
        if (x == y && y == z) {
            return x
        }
    }
    return 0
}
function checkRow(board){
    // Checks all rows of the Tic Tac Toe Board
    for (let i = 0; i < 3; i++) {
        if (checkTriplet(board[i], board[i+3], board[i+6]) > 0){
            return board[i]
        }
    }
    return 0
}

function checkCol(board){
    // Checks all columns of the Tic Tac Toe Board
    for (let i = 0; i < 7; i+=3) {
        if (checkTriplet(board[i], board[i+1], board[i+2])> 0){
            return board[i]
        }
    }
    return 0
}

function checkDiag(board){
    // checks the two diagonals of the board
    if (checkTriplet(board[0], board[4], board[8])> 0){
        return board[0]
    }
    if (checkTriplet(board[2], board[4], board[6])> 0){
        return board[0]
    }

    return 0
}

function checkDraw(board){
    // checks if the board is a draw
    for (let i = 0; i < board.length; i++) {
        if (board[i] == 0){
            return false
        }
    }
    return true
}

function pushWinner(winner,id,data){
    // pushes a winner state to the game data
    console.log(data)
    data.game_state=winner
    data.active=false
    console.log("winner")
    setDoc(doc(db, "games", id), data)
}


export default async function checkBoard(id){
    // Checks the board for a winner or a draw and updates the database if this is the case.
    console.log("checking board")
    const docRef = doc(db, "games", id)
    const data = await getDoc(docRef)
    const processed_data = data.data()
    const board = processed_data.board


    const checkColumnResult = checkCol(board)
    const checkRowResult = checkRow(board)
    const checkDiagResult = checkDiag(board)
    console.log({checkColumnResult, checkRowResult, checkDiagResult})
    if(checkDraw(board)){
        pushWinner(3, id, processed_data)
    } else if (checkColumnResult > 0){
        pushWinner(checkColumnResult, id, processed_data)
    }else if(checkRowResult > 0){
        pushWinner(checkRowResult, id, processed_data)
    }else if(checkDiagResult > 0){
        pushWinner(checkDiagResult, id, processed_data)
    }


}
