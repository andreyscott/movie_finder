import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { MovieItem } from "./movieItem";
import {movie} from './sharedInterfaces'

interface Props{
    name: string,
    titles: movie[]
}

export const MovieDisplay:React.FC<Props> = ({name, titles}:Props) =>{
    return(
        <Flex direction='column' pl={{base: '28px', lg: '67px'}} pt='48px' overflowX='hidden'>
            <Text fontSize={'24px'} mb='24px'>{name}</Text>
            <Flex overflowX='auto' width='100%' >
                {titles.map(i => (<MovieItem name={i.name} poster={i.poster} key={i.id}/>))}
            </Flex>
        </Flex>
    )
}