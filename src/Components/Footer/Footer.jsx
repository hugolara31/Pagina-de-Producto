import { Divider, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
const Footer = () => {
    return(
        <VStack bg="black" h="auto" w="100%" color="#F4F4F4" mt="50px">
            <Flex bg="black" h="5px" w="100%"></Flex>
            <Flex h="auto" w="100%" direction={{base:"column",sm:"column", md:"row"}} pl={{sm:"5%", md:"0"}} paddingBlock="10px" justifyContent={{sm:"flex-start", md:"space-around"}} alignItems="center">
                <Flex flexDirection="column" width={{base:"90%", sm:"90%", md:"20%"}} mb={{base:"20px", sm:"20px", md:"0px"}} alignItems={{base:"center", sm:"center", md:"flex-start"}}>
                    
                    <Text fontSize='md'>Atención al cliente:</Text>
                    <Heading as='h4' size='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>
                        11-3282-1250
                    </Heading>
                   
                </Flex>
               
                <Flex flexDirection="column" width={{base:"90%", sm:"90%", md:"20%"}} mb={{base:"20px", sm:"20px", md:"0px"}} alignItems={{base:"center", sm:"center", md:"flex-start"}}>
                    <Heading as='h4' mb="15px" size='md'>
                        Redes Sociales
                    </Heading>
                    <Text fontSize='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>Twitter</Text>
                    <Text fontSize='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>Facebook</Text>
                    <Text fontSize='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>Instagram</Text>
                    <Text fontSize='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>Youtube</Text>
                </Flex>
                <Flex flexDirection="column" width={{base:"90%", sm:"90%", md:"20%"}} mb={{base:"20px", sm:"20px", md:"0px"}} alignItems={{base:"center", sm:"center", md:"flex-start"}}>
                    <Heading as='h4' mb="15px" size='md'>
                        Mi Cuenta
                    </Heading>
                    <Text fontSize='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>Resumen</Text>
                    <Text fontSize='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>Favoritos</Text>
                    <Text fontSize='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>Direcciones</Text>
                    <Text fontSize='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>Historial</Text>
                </Flex>
            </Flex>
            <Divider/>
            <Flex w="100%" alignItems="center" justifyContent="center" pb="10px">
                <Text fontSize='sm'>Copyrigth - All rigths reserved © 2024</Text>
            </Flex>
        </VStack>
    )
}

export { Footer }