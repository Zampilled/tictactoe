import {doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "@/src/lib/firebase/clientApp";
import {useDocumentData} from "react-firebase-hooks/firestore";
import checkBoard from "@/src/lib/checkBoard";




export default async function makeMove(
    tile_i,
    game_id,
    turn,
    user,
    x_uuid,
    o_uuid
    ){
    console.log({tile_i,
        game_id,
        turn,
        user,
        x_uuid,
        o_uuid})

    if(user){
        if(turn == 1){
            if(user.email == x_uuid){
                console.log("x has moved")
                let myData = await getDoc(doc(db,"games", game_id))

                let myDataNew = myData.data()
                console.log(myDataNew)

                if (myDataNew) {
                    myDataNew.board[tile_i] = 1
                    myDataNew.turn = 2
                }
                console.log(myDataNew)
                console.log("end")
                setDoc(doc(db, "games", game_id), myDataNew)
                await checkBoard(game_id)
            }

        }else if(turn  == 2){
            if (user.email == o_uuid){
                console.log("o has moved")
                let myData = await getDoc(doc(db,"games", game_id))
                let myDataNew = myData.data()
                console.log(myDataNew)

                if (myDataNew) {
                    myDataNew.board[tile_i] = 2
                    myDataNew.turn = 1
                }
                console.log(myDataNew)
                console.log("end")
                setDoc(doc(db, "games", game_id), myDataNew)
                await checkBoard(game_id)
            }
        }

    }
    return null

}

