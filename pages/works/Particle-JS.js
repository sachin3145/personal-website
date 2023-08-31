import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Particle-JS">
      <Container>
        <Title>
          Particle-JS <Badge>2023</Badge>
        </Title>
        <P>Simple particle system built using HTML Canvas and JavaScript</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link target="_blank" href="https://particle-js-five.vercel.app/">
              https://particle-js-five.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              target="_blank"
              href="https://github.com/sachin3145/particleJS"
            >
              {' '}
              https://github.com/sachin3145/particleJS <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta> <span>HTML Canvas, JavaScript</span>
          </ListItem>
        </List>
        <WorkImage
          src="\images\works\particlejs\thumbnail.png"
          alt="Particle-JS"
        />
        <WorkImage src="\images\works\particlejs\1.png" alt="Particle-JS" />
      </Container>
    </Layout>
  )
}

export default Work
