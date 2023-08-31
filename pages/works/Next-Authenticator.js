import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Next-Authenticator">
      <Container>
        <Title>
          Next-Authenticator <Badge>2023</Badge>
        </Title>
        <P>
          A Web Application demonstrating the fundamentals for implementing user
          authentication and managing user data within your Next.js application
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              target="_blank"
              href="https://next-js-authenticatior.vercel.app/"
            >
              https://next-js-authenticatior.vercel.app/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              target="_blank"
              href="https://github.com/sachin3145/Next.js-Authenticatior"
            >
              {' '}
              https://github.com/sachin3145/Next.js-Authenticatior{' '}
              <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>{' '}
            <span>Next.js, NextAuth.js, MongoDB, Tailwind CSS</span>
          </ListItem>
        </List>
        <WorkImage
          src="/images/works/authenticator/thumbnail.png"
          alt="Next-Authenticator"
        />
        <WorkImage
          src="/images/works/authenticator/1.png"
          alt="Next-Authenticator"
        />
        <WorkImage
          src="/images/works/authenticator/2.png"
          alt="Next-Authenticator"
        />
        <WorkImage
          src="/images/works/authenticator/3.png"
          alt="Next-Authenticator"
        />
      </Container>
    </Layout>
  )
}

export default Work
