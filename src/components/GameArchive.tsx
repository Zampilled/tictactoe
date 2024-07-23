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
import {collection, getDocs, query, where} from "@firebase/firestore";
import {db} from "@/src/lib/firebase/clientApp";
import {useRouter} from "next/navigation";
import {useCollectionData} from "react-firebase-hooks/firestore";

export default function GameArchive(){
    // Component that lists all finished games and links to them
    const router = useRouter()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const gameQuery = query(collection(db, "games"), where("active", "==", false));
    const [snapshot] = useCollectionData(gameQuery);
    console.log(snapshot)
    snapshot?.map((doc)=>{
        console.log(doc)
    })

    return (
        <>
            <Button onClick={onOpen}>Archived Games</Button>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Archive Game List</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack>
                            <Box pb={3}>
                            {
                                snapshot?(snapshot.length>0? (snapshot.map((values) => (
                                <Box p={1}>
                                <Button onClick={() => router.push("/game/" + String(values.id))}>
                                    <HStack>
                                        <Text>(X) {values.x_uuid} VS {values.o_uuid} (O)</Text>
                                    </HStack>
                                </Button>
                                </Box>
                                )
                                )): <Text pb={3}>No Archived Games :(</Text>) : <Box/>}
                            </Box>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

