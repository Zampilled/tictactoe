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

export default function GameList(){
    const router = useRouter()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const gameQuery = query(collection(db, "games"), where("active", "==", true));
    const [snapshot] = useCollectionData(gameQuery);
    console.log(snapshot)
    snapshot?.map((doc)=>{
        console.log(doc)
    })


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

