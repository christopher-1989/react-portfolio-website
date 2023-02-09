import {Heading, HStack, Image, SimpleGrid, Text, useColorModeValue} from '@chakra-ui/react'
import headshot from '../assets/img/yow-22-bw.jpg'
import {profile} from '../store/profile'
import {PageContainer} from "../components/PageContainer"
import {technologies} from "../store/technology"
import {TechnologyIcon} from "../components/TechnologyIcon"


const {
  name,
  title,
  about,
  quote,
} = profile

export default function HomePage() {
  const backgroundColour = useColorModeValue('teal.500', 'teal.300')
  const colour = useColorModeValue('white', 'black')
  return  <PageContainer heading={name}>
    <Heading as={'h2'} size={'lg'}>{title}</Heading>
    <HStack>
      <Image
        src={headshot}
        alt='profile-headshot'
        borderRadius='full'
        boxSize={200}
        fit={"cover"}
      />
      <Text as={'mark'} role='quote' textColor={colour} backgroundColor={backgroundColour} paddingX={1}>{quote}</Text>
    </HStack>

    <Text role='about-me-description'>{about}</Text>
    <Heading as={'h2'} size={'lg'}>Skills: </Heading>
    <SimpleGrid flexWrap={'wrap'} minChildWidth={20} spacing={10}>
      {technologies.map((technology, index) => <TechnologyIcon name={technology.name} icon={technology.icon} key={`technology-icon-${index}`} />)}
    </SimpleGrid>
  </PageContainer>
}
