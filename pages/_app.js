import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import GFonts from '../components/fonts'
import theme from '../libs/theme'

function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <GFonts />
      <Layout router={router}>
        <Component {...pageProps} key="router.route" />
      </Layout>
    </ChakraProvider>
  )
}

export default Website
