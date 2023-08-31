import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article"

const Work = () => {
  return (
    <Layout title="InLoop">
      <Container>
        <Title>
          InLoop <Badge>2023</Badge>
        </Title>
        <P>
          A real-time code editor built on React and Web Sockets allows for
          collaborative coding, with instant updates and synchronization across
          multiple users
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              target="_blank"
              href="https://garrulous-band-cymbal.glitch.me/"
            >
              https://garrulous-band-cymbal.glitch.me/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              target="_blank"
              href="https://github.com/sachin3145/realtime-code-editor"
            >
              {' '}
              https://github.com/sachin3145/realtime-code-editor{' '}
              <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta> <span>React, WebSockets</span>
          </ListItem>
        </List>
        <WorkImage src="\images\works\inloop\thumbnail.png" alt="InLoop" />
        <WorkImage src="\images\works\inloop\1.png" alt="InLoop" />
        <WorkImage src="\images\works\inloop\2.png" alt="InLoop" />
        <WorkImage src="\images\works\inloop\3.png" alt="InLoop" />
      </Container>
    </Layout>
  )
}

export default Work;