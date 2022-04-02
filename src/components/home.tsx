import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

export const Home:React.FC = () => {
    return(
        <Flex height='100vh' width="100vw" direction="column">
            <Flex width="100%" height={{base: '67px', md: "140px"}} background="brand.100" alignItems='center' justifyContent={{base: 'center', lg: 'flex-start' }} >
                <Image src="./MyTestApp.png" alt="logo" height={{base: '33.58px', md: '60px'}} width={{base: '108px', md: '193px'}} border='1px' borderColor='brand.200' ml={{base: '0px', lg: '77px'}} p={{base:'7.83px 9.68px 7.3px 10.68px', md: '14px 17.3px 13.06px 19px'}} />
            </Flex>
            <Flex height='calc(100% - 140px)' backgroundImage='./home-bg.jpg' backgroundRepeat='no-repeat' backgroundSize='cover'>
                <Text fontSize={{base: '28px', md: '72px'}} color='brand.200' fontWeight={'700'} lineHeight={{base: '36.46px', md: '93.74px'}} m='auto' ml={{base: 'auto', xl: '77px'}} width={{base: '273px' ,md: '490px'}} textAlign={{ base: 'center', xl: "left"}}>Watch something incredible.</Text>
            </Flex>
        </Flex>
    )       
}