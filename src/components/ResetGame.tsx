


"use client"
import {
    Box,
    Button,

} from "@chakra-ui/react";
import {auth, db} from "@/src/lib/firebase/clientApp";
import createGame from "@/src/lib/createGame";
import { useRouter } from 'next/navigation'


import { Field, Form, Formik } from 'formik';
import {useCollectionData, useDocument, useDocumentData, useDocumentDataOnce} from "react-firebase-hooks/firestore";
import {doc, setDoc} from "firebase/firestore";
import {collection, query, where} from "@firebase/firestore";
import {Integer} from "@firebase/webchannel-wrapper/bloom-blob";


export default function ResetGame({id}){
    const router = useRouter()


    let [game_data] = useCollectionData(query(collection(db, "games"), where("id", "==", Number(id))))
    console.log(game_data)

    function onSubmit(game_data, router){
            const new_id = createGame(game_data[0].o_uuid, game_data[0].x_uuid)
            game_data[0].replay_id = new_id
            setDoc(doc(db, "games", id), game_data[0])
            router.push("/game/" + String(new_id))
    }
    if(game_data){
    if(game_data.length>0){
    return (
        <>
            {game_data[0].replay_id != -1?
                (
                    <Button onClick={() => router.push("/game/"+String(game_data[0].replay_id))}>Join Rematch</Button>
                )

                :<Button onClick={() => onSubmit(game_data, router)}>Rematch</Button>}


        </>
    )
    }} else {
        return (
            <></>
        )
    }
}

