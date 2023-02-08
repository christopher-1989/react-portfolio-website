import {render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import {profile} from "../store/profile"
import {ExperiencePage, TYPICAL_DAY, PROJECTS} from "../routes/ExperiencePage"

const {
  name,
  competencies,
} = profile

describe('About page', () => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
  beforeEach(() => render(<ExperiencePage />))

  it('renders all components buttons', () => {
    const nameHeading = screen.getByRole('heading', {name: name})
    const typicalDayHeading = screen.getByText(TYPICAL_DAY)
    const projectsHeading = screen.getByText(PROJECTS)

    expect(nameHeading).toHaveTextContent(name)
    expect(typicalDayHeading).toBeInTheDocument()
    expect(projectsHeading).toBeInTheDocument()
  })

  it('should have the accordion initially open to on both panels', () => {
    const accordionButtons = screen.getAllByRole('button', {expanded: true})

    expect(accordionButtons[0]).toHaveTextContent(TYPICAL_DAY)
    expect(accordionButtons[1]).toHaveTextContent(PROJECTS)
  })

  it('shows list of competencies when first accordion is expanded', async () => {
    const typicalDayHeading = screen.getByText(TYPICAL_DAY)
    await userEvent.click(typicalDayHeading)

    const competencyComponents = screen.getAllByRole('listitem')
    competencyComponents.forEach((c, index) => expect(c).toHaveTextContent(competencies[index]))
  })
})
