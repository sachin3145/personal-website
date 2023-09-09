import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Badge,
  Link,
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { ItemSection, ItemLabel } from '../components/item'

const page = () => {
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
            Education
          </Heading>

          <ItemSection>
            B.Tech in Computer Science & Engineering (
            <Link target="_blank" href="http://www.ipu.ac.in/usict/">
              USICT, GGSIPU
              <ExternalLinkIcon mx="2px" />
            </Link>
            ) <Badge>9.25 CGPA</Badge>{' '}
            <Badge colorScheme="green">2025 Expected</Badge>
          </ItemSection>
          <ItemSection>
            CBSE Senior School, Class 12th (
            <Link target="_blank" href="https://bloompublicschool.org/">
              Bloom Public School
              <ExternalLinkIcon mx="2px" />
            </Link>
            ) <Badge>92.8%</Badge> <Badge colorScheme="green">2021 Completed</Badge>
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
      </Container>
    </Layout>
  )
}

export default page
