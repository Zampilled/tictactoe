import {
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged as _onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/src/lib/firebase/clientApp";

export function onAuthStateChanged(cb) {
    // deals with Authentic Changes
    return _onAuthStateChanged(auth, cb);
}

export async function signInWithGoogle() {
    // Signs in with Google Popup
    const provider = new GoogleAuthProvider();

    try {
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.error("Error signing in with Google", error);
    }
}

export async function signOut() {
    // Signs out the user
    try {
        return auth.signOut();
    } catch (error) {
        console.error("Error signing out with Google", error);
    }
}
