import {Heading, Stack, useColorModeValue} from "@chakra-ui/react";
import React, {ReactNode} from "react";

type PageContainerProps = {
  heading: string
  children: ReactNode[] | ReactNode
}

export const PageContainer = ({heading, children}: PageContainerProps) => {
  const backgroundColour = useColorModeValue('white', 'rgb(26,32,44)')

  return <Stack direction={'column'} spacing={8}>
    <Heading as={'h1'}
             size={'xl'}
             backgroundColor={backgroundColour}
             position={'sticky'}
             top={0}
             opacity={1}
             zIndex={5}
    >
      {heading}
    </Heading>
    {children}
  </Stack>
}
