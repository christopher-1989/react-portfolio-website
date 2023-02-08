import {ChatIcon, CheckIcon, InfoIcon, StarIcon} from "@chakra-ui/icons"
import {LinkButtonProps} from "./LinkButton"

export const sidebarButtonProps: LinkButtonProps[] = [
  {
    name: "Home",
    icon: <StarIcon/>,
    href: `/`
  },
  {
    name: "About",
    icon: <InfoIcon/>,
    href: '/about'
  },
  {
    name: "Experience",
    icon: <CheckIcon/>,
    href: '/experience'
  },
  {
    name: "Contact",
    icon: <ChatIcon/>,
    href: '/contact'
  }
]
