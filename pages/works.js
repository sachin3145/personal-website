import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { GridItemStyle, WorkGridItem, GridItem } from "../components/grid-item";
import thumbInloop from "../public/images/works/inloop/thumbnail.png";
import thumbAuthenticator from '../public/images/works/authenticator/thumbnail.png'
import thumbVisualizer from '../public/images/works/sorting-visualizer/thumbnail.png'
import thumbParticle from '../public/images/works/particlejs/thumbnail.png'
import thumbLeetcode from '../public/images/profiles/leetcode.png'
import thumbCodeforces from '../public/images/profiles/codeforces.png'
import thumbCodechef from '../public/images/profiles/codechef.png'
import thumbHackerRank from '../public/images/profiles/hackerrank.png'
import { useEffect, useState } from 'react'
import Layout from "../components/layouts/article";


const Works = () => {

    const [domLoaded, setDomLoaded] = useState(false)

    useEffect(() => {
      setDomLoaded(true)
    }, [])
  
  return (
    <>
      {domLoaded && (
        <Layout>
          <Container>
            <Heading as="h3" fontSize={20} mb={4}>
              Coding Profiles
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
              <Section>
                <GridItem
                  href="https://leetcode.com/sachin3145/"
                  thumbnail={thumbLeetcode}
                  title="LeetCode"
                />
              </Section>
              <Section>
                <GridItem
                  href="https://codechef.com/users/sakumo"
                  thumbnail={thumbCodechef}
                  title="CodeChef"
                />
              </Section>
              <Section>
                <GridItem
                  href="https://codeforces.com/profile/sachin3145"
                  thumbnail={thumbCodeforces}
                  title="CodeForces"
                />
              </Section>
              <Section>
                <GridItem
                  href="https://www.hackerrank.com/sachin3145"
                  thumbnail={thumbHackerRank}
                  title="HackerRank"
                />
              </Section>
            </SimpleGrid>
            <GridItemStyle />
            <Divider mb={4} />
            <Heading as="h3" fontSize={20} mb={4}>
              Works
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
              <Section>
                <WorkGridItem
                  id="Next-Authenticator"
                  title="Next-Authenticator"
                  thumbnail={thumbAuthenticator}
                >
                  Demonstrating user authentication
                </WorkGridItem>
              </Section>
              <Section>
                <WorkGridItem
                  id="InLoop"
                  title="InLoop"
                  thumbnail={thumbInloop}
                >
                  A real-time code editor
                </WorkGridItem>
              </Section>
              <Section>
                <WorkGridItem
                  id="Sorting-Visualizer"
                  title="Sorting-Visualizer"
                  thumbnail={thumbVisualizer}
                >
                  Visual demonstration of sorting algorithms
                </WorkGridItem>
              </Section>
              <Section>
                <WorkGridItem
                  id="Particle-JS"
                  title="Particle JS"
                  thumbnail={thumbParticle}
                >
                  Canvas Implementation of particle interaction
                </WorkGridItem>
              </Section>
            </SimpleGrid>
            <GridItemStyle />
          </Container>
        </Layout>
      )}
    </>
  )
}

export default Works;