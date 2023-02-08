import {Stack, useMediaQuery} from "@chakra-ui/react"
import {LinkButton, LinkButtonProps} from "./LinkButton";

type Props = {
  buttons: LinkButtonProps[]
}

export const Sidebar = ({buttons}: Props) => {
	const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

	return <aside>
		<Stack direction={isLargerThan800 ? 'column' : 'row'} align="end" spacing={isLargerThan800 ? 4 : 0}>
			{buttons.map((button, index) => <LinkButton name={button.name} icon={button.icon} href={button.href} key={index} />)}
		</Stack>
	</aside>
}
