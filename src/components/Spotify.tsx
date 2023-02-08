import { Heading, Text, VStack } from "@chakra-ui/react"

export const Spotify = () => <VStack>
  <Heading as='h2' size={'lg'}>Feature Toggle</Heading>
  <Text as='h3' size={'md'}>Here's some music get help you get into the flow state!</Text>
  <iframe title="spotify-player" 
    style={{backgroundColor: 'current'}} 
    src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator&theme=0" 
    width="90%" 
    height="352"
    frameBorder="0" 
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy">
  </iframe>
</VStack>