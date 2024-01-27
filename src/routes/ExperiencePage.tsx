import {PageContainer} from "../components/PageContainer"
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  ListItem,
  UnorderedList
} from "@chakra-ui/react"
import {profile} from "../store/profile"
import {projects} from "../store/projects"
import {ProjectCard} from "../components/ProjectCard"

const {
  name,
  competencies,
  furtherExperience
} = profile

export const TYPICAL_DAY = "What a typical day looks like:"
export const FURTHER_EXPERIENCE = "Further experience:"
export const PROJECTS = "Projects:"

export const ExperiencePage = () => {

  return <PageContainer heading={name}>
    <Accordion defaultIndex={[0, 1]} allowMultiple borderColor={"transparent"}>
      <AccordionItem>
        <h2>
          <AccordionButton fontSize={'3xl'}>
            <Box as="span" flex='1' textAlign='left'>
              <Heading as={'h2'} size={'lg'}>{TYPICAL_DAY}</Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList>
            {competencies.map((competency, index) => <ListItem paddingBottom={4} key={`competency-${index}`}>{competency}</ListItem>)}
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton fontSize={'3xl'}>
            <Box as="span" flex='1' textAlign='left'>
              <Heading as={'h2'} size={'lg'}>{FURTHER_EXPERIENCE}</Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList>
            {furtherExperience.map((experience, index) => <ListItem paddingBottom={4} key={`experience-${index}`}>{experience}</ListItem>)}
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton fontSize={'3xl'}>
            <Box as="span" flex='1' textAlign='left'>
              <Heading as={'h2'} size={'lg'}>{PROJECTS}</Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {projects.map((project, index) => <ProjectCard project={project} key={`project-card-${index}`} />)}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  </PageContainer>
}
