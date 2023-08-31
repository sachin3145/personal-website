import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Sorting-Visualizer">
      <Container>
        <Title>
          Sorting-Visualizer <Badge>2023</Badge>
        </Title>
        <P>
          A sorting visualizer built on React is a web application that visually
          demonstrates sorting algorithms wherein users can observe the
          step-by-step sorting process and gain a better understanding of how
          these algorithms work.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              target="_blank"
              href="https://sorting-visualizer-ten-psi.vercel.app/"
            >
              https://sorting-visualizer-ten-psi.vercel.app/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              target="_blank"
              href="https://github.com/sachin3145/sorting-visualizer"
            >
              {' '}
              https://github.com/sachin3145/sorting-visualizer{' '}
              <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta> <span>React</span>
          </ListItem>
        </List>
        <WorkImage
          src="\images\works\sorting-visualizer\thumbnail.png"
          alt="Sorting-Visualizer"
        />
        <WorkImage
          src="\images\works\sorting-visualizer\1.png"
          alt="Sorting-Visualizer"
        />
        <WorkImage
          src="\images\works\sorting-visualizer\2.png"
          alt="Sorting-Visualizer"
        />
        <WorkImage
          src="\images\works\sorting-visualizer\3.png"
          alt="Sorting-Visualizer"
        />
      </Container>
    </Layout>
  )
}

export default Work
