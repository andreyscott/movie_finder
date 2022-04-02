import React from "react";
import {Flex, Text} from '@chakra-ui/react';

interface Props {
    name: string,
    poster: string,
}



export const MovieItem:React.FC<Props> =({name, poster}:Props)=> {
    return (
        <Flex alignItems='center' justifyContent='center' minHeight='300px' minWidth='300px' bg={`url(${poster}) rgba(0, 10, 5, 0.5)`} mr='13px'  borderRadius='12px' backgroundImage={poster} backgroundRepeat='no-repeat' backgroundSize='cover' backgroundBlendMode={'multiply'}>
            <Text fontSize='24px' color='brand.200'>{name}</Text>
        </Flex>
    )
}