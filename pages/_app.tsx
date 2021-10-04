import '../styles/globals.css'
import type { AppProps } from 'next/app'
// 1. import `ChakraProvider` component
import { ChakraProvider, Theme } from "@chakra-ui/react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
       <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
