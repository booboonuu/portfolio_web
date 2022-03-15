import NextLink from 'next/link';
import Image from 'next/image';
import {Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Global } from '@emotion/core';

export const GridItem = {{ children, href, title, thumbnail }} => {
    <Box w="100%" alight="center">
        <LinkBox cursor="pointer">
            <Image src={thumbnail}
                alt={title}
                classname="grid-item-thumnail"
                placeholder="blur"
                loading="lazy" />
            <LinkOverlay href={href} target="_blank">
                <Text mt="2">{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
}

export default WorkGridItem = ({children, id, titlr, thumbnail}) => {
    <Box w="100%" align="center">
        <NextLink href={`/work/${id}`}> 
            <LinkBox cursor="pointer">
                <Image src={thumbnail}
                    alt={title}
                    classname="grid-item-thumnail"
                    placeholder="blur" />
                <LinkOverlay href={`/work/${id}`} target="_blank">
                    <Text mt="2" fontSize={20}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>        
        </NextLink>
    </Box>
}
