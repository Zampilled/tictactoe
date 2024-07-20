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
import {Box, Button, Center, Container, Flex, HStack, Image, Text} from "@chakra-ui/react";


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

            <Container width={"100%"} display={"flex"} align={"center"}>
                <Box align={"right"}>
            {user ? (
                <HStack>


                    <Image src={user.photoURL || "/profile.svg"} alt={user.email} />
                    <Text>{user.email}</Text>



                        <Button onClick={handleSignOut}>
                            Sign Out
                        </Button>



                </HStack>
            ) : (
                <Button onClick={handleSignIn}>

                    Login
                </Button>
            )}
                </Box>
            </Container>



    );
}