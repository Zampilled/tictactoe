"use client"
import {
    Box,
    Button, Heading, HStack, Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    VStack,
    Text
} from "@chakra-ui/react";
import {and, collection, getDocs, or, query, where} from "@firebase/firestore";
import {db} from "@/src/lib/firebase/clientApp";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {auth} from "@/src/lib/firebase/clientApp"
import {useCollectionData} from "react-firebase-hooks/firestore";


export default function MyGameList(){


    const router = useRouter()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const gameQuery = query(collection(db, "games"),    and(where("active", "==", true), or(where("x_uuid", "==", auth.currentUser.email), where("o_uuid", "==", auth.currentUser.email))));
    const [snapshot] = useCollectionData(gameQuery);
    console.log(snapshot)
    snapshot?.map((doc)=>{
        console.log(doc)
    })

    return (
        <>
            <Button onClick={onOpen}>My Active Games</Button>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>My Active Game List</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack>
                            <Box>
                                {
                                    snapshot?.map((values) => (
                                            <Box p={1}>
                                                <Button onClick={() => router.push("/game/" + String(values.id))}>
                                                    <HStack>
                                                        <Text>(X) {values.x_uuid} VS {values.o_uuid} (O)</Text>
                                                    </HStack>
                                                </Button>
                                            </Box>
                                        )
                                    )}
                            </Box>
                        </VStack>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </>
    )
}

