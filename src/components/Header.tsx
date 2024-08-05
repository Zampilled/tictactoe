'use client'
import React, {useState, useEffect} from "react";
import Link from "next/link";
import {
    signInWithGoogle,
    signOut,
    signInGuest
} from "@/src/lib/firebase/auth.ts";
import {useRouter} from "next/navigation";
import {firebaseConfig} from "@/src/lib/firebase/config";
import {useUserSession} from "@/src/lib/useUserSession";
import {Box, Button, Center, Container, Flex, Heading, HStack, Image, Spacer, Text} from "@chakra-ui/react";

/**
 * The header component which displays key info on all screens.
 *
 * The main components are:
 *
 * the home button on the left which on click redirects the user to the home page.
 *
 * the authentication panel which when no user is logged in prompts the user to either login with one of the guest accounts or login with a Google account.
 * @param initialUser - the initial user data to use to loa the header component
 * @constructor
 * @return The Header component
 */
export default function Header({initialUser}) {

    const user = useUserSession(initialUser);
    const router = useRouter()
    return (
        <Flex minWidth='100vw' maxWidth={"100vw"} alignItems='center' gap='2'>
            <Box p='2'>
                <HStack>
                    <Button minWidth={"7vh"} variant={"ghost"} minHeight={"7vh"} onClick={() => router.push("/")}>
                        <HStack>

                            <Image maxWidth={"7vh"} maxHeight={"7vh"} src={"/logo.png"}/>


                            <Heading size='xl' color={"#5E17EB"}>TIC</Heading>
                            <Heading size='xl'>TAC</Heading>
                            <Heading size='xl' color={"#5E17EB"}>TOE</Heading>
                        </HStack>
                    </Button>
                    <Text>By azamolot@tcd.ie</Text>
                </HStack>
            </Box>
            <Spacer/>
            <Box gap={2} p={4}>
                {user ? (
                    <HStack>
                        <Image src={user.photoURL || "/profile.svg"} alt={user.email} borderRadius={"100%"}
                               maxW={"5vw"}/>
                        <Text>{user.email}</Text>
                        <Button onClick={() => signOut()}>
                            Sign Out
                        </Button>
                    </HStack>
                ) : (
                    <HStack>
                        <Button onClick={() => signInGuest("1@guest.ie", "guest1")}>
                            Guest 1
                        </Button>
                        <Button onClick={() => signInGuest("2@guest.ie", "guest2")}>
                            Guest 2
                        </Button>
                        <Button onClick={() => signInWithGoogle()}>

                            Login
                        </Button>
                    </HStack>
                )}
            </Box>
        </Flex>


    );
}