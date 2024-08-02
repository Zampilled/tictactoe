'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
    signInWithGoogle,
    signOut,
    onAuthStateChanged, signInGuest
} from "@/src/lib/firebase/auth.ts";
import { useRouter } from "next/navigation";
import { firebaseConfig } from "@/src/lib/firebase/config";
import {useUserSession} from "@/src/lib/useUserSession";
import {Box, Button, Center, Container, Flex, Heading, HStack, Image, Spacer, Text} from "@chakra-ui/react";


export default function Header({initialUser}) {
    // Header Component of the project which displays the home button and the login
    const user = useUserSession(initialUser) ;
    const router = useRouter()

    const handleSignOut = event => {
        event.preventDefault();
        signOut();
    };

    const handleSignIn = event => {
        event.preventDefault();
        signInWithGoogle();
    };

    const handleGuestSignIn = (id) =>{
        let email;
        let password;
        if (id == 1){
            email = "1@guest.ie"
            password = "guest1"
        }else{
            email = "2@guest.ie"
            password = "guest2"
        }
        signInGuest(email, password)
    }

    return (
        <Flex minWidth='100vw' maxWidth={"100vw"} alignItems='center' gap='2'>
            <Box p='2'>
                <HStack>
                <Button minWidth={"7vh"} variant={"ghost"} minHeight={"7vh"} onClick={() => router.push("/")}>
                    <HStack>

                    <Image maxWidth={"7vh"} maxHeight={"7vh"} src={"/logo.png"}/>



                <Heading size='xl' color={"#5E17EB"}>TIC</Heading>
                    <Heading size='xl' >TAC</Heading>
                    <Heading size='xl' color={"#5E17EB"}>TOE</Heading>
                </HStack>
                </Button>
                    <Text>By azamolot@tcd.ie</Text>
                </HStack>
            </Box>
            <Spacer />
            <Box gap={2} p={4}>
                {user ? (
                    <HStack>


                        <Image src={user.photoURL || "/profile.svg"} alt={user.email} borderRadius={"100%"} maxW={"5vw"} />
                        <Text>{user.email}</Text>



                        <Button onClick={handleSignOut}>
                            Sign Out
                        </Button>



                    </HStack>
                ) : (
                    <HStack>
                        <Button onClick={() => handleGuestSignIn(1)}>
                            Guest 1
                        </Button>
                        <Button onClick={() => handleGuestSignIn(2)}>
                            Guest 2
                        </Button>
                    <Button onClick={handleSignIn}>

                        Login
                    </Button>
                    </HStack>
                )}
            </Box>
        </Flex>




    );
}