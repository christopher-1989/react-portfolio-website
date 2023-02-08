import {Button, Link} from "@chakra-ui/react"
import {ExternalLinkIcon} from "@chakra-ui/icons"
import {LinkButtonProps} from "./LinkButton"

export const ExternalLinkButton = ({name, icon, href}: LinkButtonProps) => {

  return <Link href={href} textDecorationThickness={0} isExternal marginBottom={4}>
    <Button leftIcon={icon}
            colorScheme='teal'
            borderWidth="1"
            variant={'outline'}
            minW={220}
            height={50}
    >
      {name}
      <ExternalLinkIcon marginLeft={'auto'} marginRight={0} />
    </Button>

  </Link>
}
