"use client"

import {useDocumentData} from "react-firebase-hooks/firestore";
import TicTacToe from "@/src/components/TicTacToe.tsx";
import {doc} from "firebase/firestore";
import {db} from "@/src/lib/firebase/clientApp";
import {auth} from "@/src/lib/firebase/clientApp";
import {Center, Heading} from "@chakra-ui/react";
import {useUserSession} from "@/src/lib/useUserSession";
import {getAuthenticatedAppForUser} from "@/src/lib/firebase/serverApp";
import {useAuthState} from "react-firebase-hooks/auth";



export default function Home({params}){
    // Creates page with specific game given a game id in the url
    const docRef = doc(db, "games", params.id)
    const data = useDocumentData(docRef)
    const user = auth.currentUser
    if (data[0]){
    return(

        <TicTacToe
        a1={data[0].board[0]}
        a2={data[0].board[1]}
        a3={data[0].board[2]}
        b1={data[0].board[3]}
        b2={data[0].board[4]}
        b3={data[0].board[5]}
        c1={data[0].board[6]}
        c2={data[0].board[7]}
        c3={data[0].board[8]}
        game_state={data[0].game_state}
        game_id={params.id}
        turn={data[0].turn}
        x_uuid={data[0].x_uuid}
        o_uuid={data[0].o_uuid}
        user = {user}

        />
    )
    }else{
        return(
            <Center minWidth={"70vw"} minHeight={"70vh"}>
        <Heading>
            Game does not exist
        </Heading>
            </Center>
        )
    }
}
