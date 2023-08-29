import NextLink from "next/link";
import Image from "next/image";
import { Box, Text, Link, LinkOverlay, LinkBox } from "@chakra-ui/react";
import { css, Global } from "@emotion/react";

export const GridItem = ({children, href, title, thumbnail}) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{ title }</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" align="center">
    <NextLink href={`/work/${id}`}>
      <LinkBox cursor="pointer">
        <Image src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          style={{borderRadius: '12px'}}

        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{ children }</Text>
      </LinkBox>
    </NextLink>
  </Box>
)
