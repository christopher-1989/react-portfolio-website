import {
    Card,
    Image,
    Stack,
    CardBody,
    Heading,
    CardFooter,
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    useColorModeValue,
    Container,
} from '@chakra-ui/react'
import { ExternalLinkButton } from './ExternalLinkButton'
import { Project } from '../store/projects'
import { LinkButtonProps } from './LinkButton'
const recipemeVideo = require('../assets/vid/share-recipe.mp4')
const hourglassVideo = require('../assets/vid/hourglass-no-timer.mp4')

type Props = {
    project: Project
}

export const ProjectCard = ({ project }: Props) => {
    const {
        name,
        description,
        link1,
        link2,
        thumbnail,
        thumbnailAlt,
        keySkills,
    } = project
    const { isOpen, onOpen, onClose } = useDisclosure()
    const backgroundColour = useColorModeValue('teal', 'teal.900')

    const hasVideo = () => (link2 ? true : false)

    const Video = ({name}: {name: string}) => (
        <>
            <Text>See a brief demo below:</Text>
            <Container centerContent>
                <video
                    title='Recipeme-iOS'
                    width={300}
                    height={600}
                    controls
                >
                    <source
                        src={name === 'Hourglass' ? hourglassVideo :  recipemeVideo}
                        type='video/mp4'
                    />
                </video>
            </Container>
        </>
    )
    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size='3xl'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody overflowY='auto'>
                        {description.split('\n').map((text, index) => (
                            <Text
                                py={'2'}
                                key={`description-text-${index}`}
                            >
                                {text}
                            </Text>
                        ))}
                        {hasVideo() && <Video name={link2?.name ?? ""} />}
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme={backgroundColour}
                            mr={3}
                            onClick={onClose}
                        >
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                role='project-card'
                marginBottom={8}
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={thumbnail}
                    alt={thumbnailAlt}
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>{name}</Heading>

                        <Text py='2'>Key technologies: </Text>
                        <Text py='2'>{keySkills}</Text>
                        <Button onClick={onOpen}>Read more</Button>
                    </CardBody>

                    <CardFooter>
                        <ExternalLinkButton
                            name={link1.name}
                            icon={link1.icon}
                            href={link1.href}
                        />
                    </CardFooter>
                </Stack>
            </Card>
        </>
    )
}
