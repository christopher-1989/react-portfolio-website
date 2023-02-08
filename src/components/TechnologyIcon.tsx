import {Container, Text} from "@chakra-ui/react";
import {Technology} from "../store/technology";


export const TechnologyIcon = ({name, icon}: Technology) => <Container  width={20} height={20} overflow={'visible'} textAlign={'center'}>
  {icon}
  <Text fontSize={12} overflow={'visible'}>{name}</Text>
</Container>
