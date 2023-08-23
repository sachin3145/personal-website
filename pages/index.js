import { Container, Box, Heading } from "@chakra-ui/react";

const page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a CSE Major and Aspiring Software Engineer!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-titel">
            Sachin Yadav
          </Heading>
          <p>Engineer / Competitive Programmer / Developer</p>
        </Box>
      </Box>
    </Container>
  )
}

export default page;