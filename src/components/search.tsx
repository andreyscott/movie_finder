import { Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';

export const Search:React.FC = () => {
    return(
        <Flex pt='63px' direction='column' pl={{base: '28px', lg: '77px'}} pr={{base: '27px', lg: '57px'}}>
            <Text fontSize={{base: '16px', lg: '24px'}} mb='4px'>Search</Text>
            <Input type='text' width='100%' border='solid 1px' borderColor='brand.300' borderRadius='0' height={{base: '34px', lg:'54px'}}></Input>
        </Flex>
    )
}