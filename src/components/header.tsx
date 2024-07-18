'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
    signInWithGoogle,
    signOut,
    onAuthStateChanged
} from "@/src/lib/firebase/auth.ts";
import { useRouter } from "next/navigation";
import { firebaseConfig } from "@/src/lib/firebase/config";
import {useUserSession} from "@/src/lib/useUserSession";


export default function Header({initialUser}) {

    const user = useUserSession(initialUser) ;

    const handleSignOut = event => {
        event.preventDefault();
        signOut();
    };

    const handleSignIn = event => {
        event.preventDefault();
        signInWithGoogle();
    };

    return (
        <header>
            {user ? (
                <>
                    <div className="profile">
                        <p>
                            <img className="profileImage" src={user.photoURL || "/profile.svg"} alt={user.email} />
                            {user.displayName}
                        </p>


                        <a href="#" onClick={handleSignOut}>
                            Sign Out
                        </a>


                    </div>
                </>
            ) : (
                <div className="profile"><a href="#" onClick={handleSignIn}>

                    Lo
                </a></div>
            )}
        </header>
    );
}