import { Box, Container, Divider } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../navbar.js"
import { useEffect, useState } from "react";
import Footer from "../footer.js";

const Main = ({ children, router }) => {
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <>
      {domLoaded && (
        <Box as="main" pb={8}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <title>Sachin Yadav - Homepage</title>
            <link rel="icon" href="/images/icon.png" type="image/x-icon" />
          </Head>
          <Navbar path={router.asPath} />
          <Divider my={1} visibility={0}/>
          <Container maxW={'container.md'} pt={14}>
            {children}
            <Footer />
          </Container>
        </Box>
      )}
    </>
  )
}

export default Main;