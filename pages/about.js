import {
  Container,
  Box,
  Heading,
  Badge,
  Link,
  Button,
  Divider,
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { ItemSection } from '../components/item'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title" mb={4}>
              About
            </Heading>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            EDUCATION
          </Heading>

          <ItemSection>
            B.Tech in Computer Science & Engineering (
            <Link target="_blank" href="http://www.ipu.ac.in/usict/">
              USICT, GGSIPU
              <ExternalLinkIcon mx="2px" />
            </Link>
            ) <Badge>9.067 CGPA</Badge>{' '}
            <Badge colorScheme="green">2025 Expected</Badge>
          </ItemSection>
          <ItemSection>
            CBSE Senior School, Class 12th (
            <Link target="_blank" href="https://bloompublicschool.org/">
              Bloom Public School
              <ExternalLinkIcon mx="2px" />
            </Link>
            ) <Badge>92.8%</Badge>{' '}
            <Badge colorScheme="green">2021 Completed</Badge>
          </ItemSection>
          <ItemSection>
            CBSE Secondary School, Class 10th (
            <Link target="_blank" href="https://bloompublicschool.org/">
              Bloom Public School
              <ExternalLinkIcon mx="2px" />
            </Link>
            ) <Badge>95.8%</Badge>{' '}
            <Badge colorScheme="green">2019 Completed</Badge>
          </ItemSection>
        </Section>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            SKILLS
          </Heading>
          <Badge colorScheme="green" m={1}>
            HTML
          </Badge>
          <Badge colorScheme="green" m={1}>
            CSS
          </Badge>
          <Badge colorScheme="green" m={1}>
            JAVASCRIPT
          </Badge>
          <Badge colorScheme="green" m={1}>
            MONGODB
          </Badge>
          <Badge colorScheme="green" m={1}>
            EXPRESS
          </Badge>
          <Badge colorScheme="green" m={1}>
            REACT
          </Badge>
          <Badge colorScheme="green" m={1}>
            NODE
          </Badge>
          <Badge colorScheme="green" m={1}>
            OOPS
          </Badge>
          <Badge colorScheme="green" m={1}>
            RESTFUL API&apos;S
          </Badge>
          <Badge colorScheme="green" m={1}>
            WEB SOCKETS
          </Badge>
          <Badge colorScheme="green" m={1}>
            AUTHENTICATION
          </Badge>
          <Badge colorScheme="green" m={1}>
            C/C++
          </Badge>
          <Badge colorScheme="green" m={1}>
            PYTHON
          </Badge>
          <Badge colorScheme="green" m={1}>
            MYSQL
          </Badge>
          <Badge colorScheme="green" m={1}>
            DATA STRUCTURES
          </Badge>
          <Badge colorScheme="green" m={1}>
            ALGORTIHMS
          </Badge>
          <Badge colorScheme="green" m={1}>
            PROBLEM SOLVING
          </Badge>
          <Badge colorScheme="green" m={1}>
            OOPS
          </Badge>
          <Badge colorScheme="green" m={1}>
            VERSION CONTROL
          </Badge>
        </Section>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            POSITION OF RESPONSIBILITY
          </Heading>
          <ItemSection>
            Student Representative, (
            <Link target="_blank" href="http://www.ipu.ac.in/usict/">
              USICT, GGSIPU
              <ExternalLinkIcon mx="2px" />
            </Link>
            ) <Badge colorScheme="green">Sept 2023 - Present</Badge>
          </ItemSection>
          <ItemSection>
            ICPC Club Lead, (
            <Link target="_blank" href="https://usict.acm.org/">
              USS ACM Student Chapter
              <ExternalLinkIcon mx="2px" />
            </Link>
            ) <Badge colorScheme="green">Dec 2022 - Nov 2023</Badge>
          </ItemSection>
        </Section>
        <Divider />
        <Box my={4}>
          <NextLink href="/works">
            <Button
              width="100%"
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              CODING PROFILES / PROJECTS
            </Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  )
}

export default Page
