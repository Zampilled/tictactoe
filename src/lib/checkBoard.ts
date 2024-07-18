import {doc, getDoc} from "firebase/firestore";
import {db} from "@/src/lib/firebase/clientApp";

export default function checkBoard(id){
    const docRef = doc(db, "games", id)
    const data = getDoc(docRef)
    return null
}
