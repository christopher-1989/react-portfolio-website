import { Container, Stack, StackDivider, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import { Outlet } from "react-router";
import { Sidebar } from "../components/Sidebar";
import { sidebarButtonProps } from "../components/sidebarButtonProps";



export const Root = () => {
  const backgroundColour = useColorModeValue('teal', 'teal.900')
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  
return <Stack direction={isLargerThan800 ? 'row' : 'column'} divider={<StackDivider borderColor={backgroundColour}/>} paddingLeft={isLargerThan800 ? 0.20 * window.innerWidth : undefined} align='center' justify={'center'}>
  <Sidebar buttons={sidebarButtonProps}/>
  <Container height={window.innerHeight * 0.9} marginLeft={0} overflowY={'auto'} >
    <Outlet/>
  </Container>
</Stack>
}