import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import FootprintIcon from "./icons/footprint.js";

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

&:hover svg{
  transform: rotate(20deg);
}
`

const Logo = () => {
  return (
    <Link href="/">
      
      <LogoBox>
          <FootprintIcon />
          <Text 
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Roundede 1c'
            fontWeight="bold"
            ml={3}
          >
            Sachin Yadav
          </Text>
        </LogoBox>
      
    </Link>
  );
}

export default Logo;