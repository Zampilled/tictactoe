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
import {useState} from "react";
import {useRouter} from "next/navigation";
import {auth} from "@/src/lib/firebase/clientApp"


export default function MyGameList(){
    const router = useRouter()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [list, setList] = useState([]);
    let myArray = []
    let newArray = []
    const currentUser = auth.currentUser
    const gameQuery = query(collection(db, "games"), where("active", "==", true));
    getDocs(gameQuery).then(out =>{
            out.forEach((doc) => {
                    myArray.push(doc.data())
                }
            )
            for (const game in myArray){
                console.log(game)
                if(game.x_uuid==currentUser.email || game.o_uuid == currentUser.email){
                    newArray.push(game)
                }
            }
            setList(newArray)

        }
    );

    console.log(list)

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
                                    list.map((values) => (
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

