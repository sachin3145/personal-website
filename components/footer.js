import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      The Design is Inspired by{' '}
      <Link href="https://craftz.dog/" target='_blank'>Takuya Matsuyama <ExternalLinkIcon/></Link>
    </Box>
  )
}

export default Footer
