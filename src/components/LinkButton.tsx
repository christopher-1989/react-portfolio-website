import {Button, Link, useMediaQuery} from "@chakra-ui/react"
import {ReactElement} from "react"
import {Link as RouterLink} from 'react-router-dom'

export type LinkButtonProps = {
  name: string
  icon: ReactElement
  href: string
}

export const LinkButton = ({name, icon, href}: LinkButtonProps) => {
  const atCurrentPage = (pageName: string): boolean => pageName === window.location.pathname
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  return <Link as={RouterLink} to={href}>
    <Button leftIcon={isLargerThan800 ? icon : undefined}
            colorScheme='teal'
            borderWidth="0"
            variant={atCurrentPage(href) ? 'solid' : 'outline'}
    >
      {name}
    </Button>
  </Link>
}
