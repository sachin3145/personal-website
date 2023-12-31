import {
  Container,
  Box,
  Heading,
  Link,
  Button,
  Divider,
  List,
  ListItem,
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { ChevronLeftIcon} from '@chakra-ui/icons'
import NextLink from 'next/link'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5'
import { EmailIcon } from '@chakra-ui/icons'
const Page = () => {
  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title" mb={4}>
              Contact
            </Heading>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" mb={4}>
            Socials
          </Heading>
          <List>
            <ListItem>
              <Link href="mailto:sachin3145@outlook.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<EmailIcon />}
                >
                  @sachin3145
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/sachin3145" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @sachin3145
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/sachin3145/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @sachin3145
                </Button>
              </Link>
            </ListItem>
            <ListItem hidden={true}>
              <Link href="" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
        <Divider />
        <Box my={4}>
          <NextLink href="/">
            <Button
              width="100%"
              leftIcon={<ChevronLeftIcon />}
              colorScheme="teal"
            >
              BACK TO HOME
            </Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  )
}

export default Page
