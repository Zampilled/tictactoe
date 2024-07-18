"use client"

import {useDocumentData} from "react-firebase-hooks/firestore";
import Tictactoe from "@/src/components/tictactoe";
import {doc} from "firebase/firestore";
import {db} from "@/src/lib/firebase/clientApp";
import {Heading} from "@chakra-ui/react";
import {useUserSession} from "@/src/lib/useUserSession";
import {getAuthenticatedAppForUser} from "@/src/lib/firebase/serverApp";

function getUser(){
     const { currentUser } = getAuthenticatedAppForUser();
    return useUserSession(currentUser)
 }

export default function Home({params}){
    const docRef = doc(db, "games", params.id)
    const data = useDocumentData(docRef)
    const myUser = getUser()
    if (data[0]){
    return(

        <Tictactoe
        a1={data[0].a1}
        a2={data[0].a2}
        a3={data[0].a3}
        b1={data[0].b1}
        b2={data[0].b2}
        b3={data[0].b3}
        c1={data[0].c1}
        c2={data[0].c2}
        c3={data[0].c3}
        game_state={data[0].game_state}
        game_id={params.id}
        turn={data[0].turn}
        x_uuid={data[0].x_uuid}
        o_uuid={data[0].o_uuid}
        user = {myUser}

        />
    )
    }else{
        return(
        <Heading>
            Game does not exist
        </Heading>
        )
    }
}
