import { Container, Box, Heading } from '@chakra-ui/react';

const Home = () => {
    return (
        <Container 
            bg="gray.800"
        >
            <Box 
            borderRadius="lg" 
            mb={6} 
            p={3} 
            textAlign="center"
            bg="gray.100"
            color="brown"
            >
                Hello I&apos;m a Freelancer designer from Viet Nam!
            </Box>

            <Box display={{ md: 'flex'}}>
                <Box flexGrow={1} align="center">
                    <Heading
                        color={"whiteAlpha.900"}
                        as="h2" 
                        variant="page-title"
                    >
                        Louis Nguyen
                    </Heading>
                    <Box 
                        color="whiteAlpha.800"
                        textAlign="center"
                    >
                        <p>
                            Graphic Templates | Tattoo Designs | illustration Art
                        </p>
                    </Box>
                </Box>
                
            </Box>
        </Container>
    )
}

export default Home