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

/**
 * Component that lists all unfinished games.
 *
 * The component uses the firestore to find all active (unfinished) games it then maps each of these in a modal component
 * to create a button for each game that when clicked redirects the client to that game.
 * @constructor
 * @return The Game List component described.
 */
export default function GameList(){
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const gameQuery = query(collection(db, "games"), where("active", "==", true));
    const [snapshot] = useCollectionData(gameQuery);
    return (
        <>
            <Button onClick={onOpen}>Active Games</Button>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Active Game List</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack>
                            <Box pb={3}>
                                {
                                    snapshot?(snapshot.length>0? snapshot.map((values) => (
                                            <Box p={1}>
                                                <Button onClick={() => router.push("/game/" + String(values.id))}>
                                                    <HStack>
                                                        <Text>(X) {values.x_uuid} VS {values.o_uuid} (O)</Text>
                                                    </HStack>
                                                </Button>
                                            </Box>
                                        )
                                    ) : <Text p={3}>No Active Games :(</Text>):<Box/> }
                            </Box>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

