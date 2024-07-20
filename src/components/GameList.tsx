"use client"
import {
    Box,
    Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure,
} from "@chakra-ui/react";

export default function GameList(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>Active Game List</Button>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Active Games</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        hello
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

