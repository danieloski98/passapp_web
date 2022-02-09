import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script';
import Head from 'next/head'
// 1. import `ChakraProvider` component
import { ChakraProvider, Theme } from "@chakra-ui/react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
         <Script 
        id="mcjs"
        strategy="lazyOnload"
      >
        {`!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/c72b39410028c4afc5fb0d25e/5021bb74d3f1b911e04acf50d.js");`}
      </Script>
       <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
