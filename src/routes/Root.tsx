import { Container, HStack, Stack, StackDivider, Switch, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { Outlet } from "react-router";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Sidebar } from "../components/Sidebar";
import { sidebarButtonProps } from "../components/sidebarButtonProps";
import { Spotify } from "../components/Spotify";



export const Root = () => {
  const backgroundColour = useColorModeValue('teal', 'teal.900')
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  const [featureEnabled, setFeatureEnabled] = useState(false)
  
return <>
<HStack justifyContent={'space-between'}>
  <ColorModeSwitcher justifySelf="flex-end" color={"teal"}/>
  {isLargerThan800 ? <Switch colorScheme={'teal'} onChange={() => setFeatureEnabled(!featureEnabled)} paddingRight={2} /> : null}
</HStack>

<Stack direction={isLargerThan800 ? 'row' : 'column'} divider={<StackDivider borderColor={backgroundColour}/>} paddingLeft={isLargerThan800 ? 0.20 * window.innerWidth : undefined} align='center' justify={'center'}>
  <Sidebar buttons={sidebarButtonProps}/>
  <Container height={window.innerHeight * 0.95} marginLeft={0} overflowY={'auto'} >
    <Outlet/>
  </Container>
  {featureEnabled && <Spotify />}

</Stack>
</>
}