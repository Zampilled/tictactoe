


"use client"
import {
    Box,
    Button, FormControl, FormErrorMessage, FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";
import {auth} from "@/src/lib/firebase/clientApp";
import createGame from "@/src/lib/createGame";
import { useRouter } from 'next/navigation'


import { Field, Form, Formik } from 'formik';


export default function CreateGame(){
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()
    function onSubmit(values){
        if(values.o_user) {
            const id = createGame(auth.currentUser.email, values.o_user)
            router.push("/game/"+String(id))
        }
    }

    return (
        <>
            <Button onClick={onOpen}>Create Game</Button>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
            >

                <ModalOverlay/>
                <Formik initialValues={{ o_user: '' }}
                        onSubmit={(values, actions) => {
                            onSubmit(values)
                        }}>
                    {(props) => (
                    <Form>
                    <ModalContent>
                        <ModalHeader>Choose Opponent</ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody>
                            <Field name='o_user'>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <FormLabel>Enter Opponent's Email</FormLabel>
                                        <Input {...field} placeholder='Email' />
                                    </FormControl>
                                )}
                            </Field>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                mt={4}
                                colorScheme='teal'
                                isLoading={props.isSubmitting}
                                type='submit'
                            >
                                Submit
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                    </Form>
                    )}
                </Formik>
            </Modal>
        </>
    )
}

