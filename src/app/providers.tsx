
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
    // Provider for my css library
    return <ChakraProvider>{children}</ChakraProvider>
}