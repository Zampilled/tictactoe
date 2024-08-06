
import { ChakraProvider } from '@chakra-ui/react'

/**
 * Provider for Chakra UI
 * @param children - All elements bellow the provider (ie. the pages)
 * @constructor
 */
export function Providers({ children }: { children: React.ReactNode }) {
    return <ChakraProvider>{children}</ChakraProvider>
}