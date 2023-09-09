import {Container, Box, Heading, Image, useColorModeValue, Button, Spacer, Flex, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { JourneySection, JourneyYear } from "../components/journey";
import Layout from "../components/layouts/article";

import { GridItem } from "../components/grid-item";
import {IoLogoInstagram, IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5'

const page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a CSE Major and Aspiring Software Engineer!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-titel">
              Sachin Yadav
            </Heading>
            <p>Engineer / Competitive Programmer / Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src={'/images/sachin.jpeg'}
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            Sachin is a dedicated student currently pursuing a Bachelor's Degree
            in Computer Science and Engineering at the University School of
            Information, Communication, and Technology, GGSIPU.
          </Paragraph>
          <Box my={4}>
            <NextLink href="/about">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                MORE ABOUT ME
              </Button>
            </NextLink>
          </Box>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Their passion lies in honing their problem-solving skills and
            adeptly applying them to develop innovative solutions aimed at
            enhancing workplace efficiency and tackling novel problems.
          </Paragraph>
          <Box my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                SEE MY WORK
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            My Journey
          </Heading>
          <JourneySection>
            <JourneyYear>2003</JourneyYear>
            Born in New Delhi, India
          </JourneySection>
          <JourneySection>
            <JourneyYear>2021</JourneyYear>
            Completed Senior School (CBSE)
          </JourneySection>
          <JourneySection>
            <JourneyYear>2021 - Present</JourneyYear>
            B.Tech. in Computer Science & Engineering
          </JourneySection>
        </Section>
      </Container>
    </Layout>
  )
}

export default page;