import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { GridItemStyle, WorkGridItem } from "../components/grid-item";
import thumbInloop from "../public/images/works/inloop/thumbnail.png";
import thumbAuthenticator from '../public/images/works/authenticator/thumbnail.png'
import thumbVisualizer from '../public/images/works/sorting-visualizer/thumbnail.png'
import thumbParticle from '../public/images/works/particlejs/thumbnail.png'
import { useEffect, useState } from 'react'



const Works = () => {

    const [domLoaded, setDomLoaded] = useState(false)

    useEffect(() => {
      setDomLoaded(true)
    }, [])
  
  return (
    <>
      {domLoaded && (
        <Container>
          <Heading as="h3" fontSize={20} mb={4}>
            Works
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <WorkGridItem
                id="authenticator"
                title="Next-Authenticator"
                thumbnail={thumbAuthenticator}
              >
                Demonstrating user authentication
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem id="inloop" title="InLoop" thumbnail={thumbInloop}>
                A real-time code editor
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem id="sorting-visualizer" title="Sorting Visualizer" thumbnail={thumbVisualizer}>
                Visual demonstration of sorting algorithms
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem id="particlejs" title="Particle Js" thumbnail={thumbParticle}>
                Canvas Implementation of particle interaction
              </WorkGridItem>
            </Section>
          </SimpleGrid>
          <GridItemStyle />
        </Container>
      )}
    </>
  )
}

export default Works;