"use client"
import {
    Box,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    VStack,
} from "@chakra-ui/react";
import {collection, getDocs, query, where} from "@firebase/firestore";
import {db} from "@/src/lib/firebase/clientApp";
import {useState} from "react";

export default function GameArchive(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [list, setList] = useState([]);
    const gameQuery = query(collection(db, "games"), where("active", "==", true));
    getDocs(gameQuery).then(out =>
    out.forEach((doc) => {
        list.push(doc.data())
    }
    )
    );

    console.log(list)

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
                            <Box>
                            {
                                list.map(() => (
                                <Box>
                                <Button>haii</Button>
                                </Box>
                                )
                            )}
                            </Box>
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

