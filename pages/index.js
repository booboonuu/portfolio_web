import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { 
		Container, 
		Box, 
		Image, 
		Heading, 
		useColorModeValue,
    Link,
    Button
		} from '@chakra-ui/react'
import Paragraph from '../components/paragraph.js'
import Section from '../components/section.js'
import { BioSection, BioYear } from '../components/bio.js'

const Home = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('blackAlpha.500', 'whiteAlpha.200')}
        color="brown"
      >
        Hello I&apos;m a Freelancer designer from Viet Nam!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1} align="center">
          <Heading as="h2" variant="page-title">
            Louis Nguyen
          </Heading>
          <Box textAlign="center">
            <p>Graphic Templates | Tattoo Designs | illustration Art</p>
          </Box>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="Center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStylw="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/LouisNg.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section color="whiteAlpha.800" delay={0.1}>
          <Heading as="h3" variant="section-title">
            Works
          </Heading>
          <Paragraph>blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla</Paragraph>
          <NextLink href="/works/upworks">
            <Link>UpWork</Link>
          </NextLink>
          .
          <Box align="center" mt={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Louis Nguyen's portfolio
              </Button>  
            </NextLink>
          </Box>
      </Section>
      <Section color="whiteAlpha.800" delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1997</BioYear>
          Born in Sai Gon, Vietnam.
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          Admission to Saigon University of Architecture
        </BioSection>
        <BioSection>
          <BioYear>2017 to now</BioYear>
          working as a freelancer in artwork design, branding, healthcare, modeling, tattoo design 
        </BioSection>
      </Section>  

      <Section color="whiteAlpha.800" delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          {' '}
          <Link href="https://www.pinterest.com/booboonuu/art/" target="_blank">
            Art
          </Link>
          , Music,{' '}
          <Link href="https://www.facebook.com/media/set/?set=a.3181719992060014&type=3" target="_blank">
            Drawing
          </Link>
            , Photography, Music, Hangout with friends and {' '}
          <Link href="https://www.instagram.com/ink.forsoul/" target="_blank">
            Tatoo Design
          </Link>
        </Paragraph>
      </Section>

    </Container> 
  )
} 

export default Home