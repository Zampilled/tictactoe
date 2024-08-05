import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    onAuthStateChanged as _onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/src/lib/firebase/clientApp";

/**
 * Deals with changes in the Authentication by passing it on to Firebase libraries. (This is firebase boilerplate written by them)
 * @param cb - the data related to the change
 * @return change state as dictated by Firebase's own docs
 */
export function onAuthStateChanged(cb) {
    return _onAuthStateChanged(auth, cb);
}

/**
 * Creates a popup for user to sign in with their Google account
 */
export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.error("Error signing in with Google", error);
    }
}

/**
 * Method for handling of sign in process of signing in with a guest account. This is for test purposes so a user can test the features
 * without logging in with their own Google Account
 * @param user - user email address as string
 * @param password - password of user
 */
export async function signInGuest(user,password){
    try {
        signInWithEmailAndPassword(auth, user, password)
    } catch (error){
        console.error("Error Signing in Guest", error)
    }

}

/**
 * Signs out any user that is currently logged in.
 */
export async function signOut() {
    // Signs out the user
    try {
        return auth.signOut();
    } catch (error) {
        console.error("Error Signing Out", error);
    }
}
