import {render, screen} from '@testing-library/react'
import { RouterProvider } from "react-router-dom"
import userEvent from '@testing-library/user-event'
import {sidebarButtonProps} from '../components/sidebarButtonProps'
import { router } from '../routes/router'
import { ABOUT_PAGE_TITLE } from '../routes/AboutPage'
import {profile} from '../store/profile'
import { PROJECTS, TYPICAL_DAY } from '../routes/ExperiencePage'

describe('Sidebar', () => {
  window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {},
    }
  }
  jest.spyOn(console, 'error').mockImplementation(() => {})
  
  beforeEach(() => render(<RouterProvider router={router}/>))

  it('renders four buttons', () => {

    const homeButton = screen.getByRole('button', {name: sidebarButtonProps[0].name})
    const aboutButton = screen.getByRole('button', {name: sidebarButtonProps[1].name})
    const experienceButton = screen.getByRole('button', {name: sidebarButtonProps[2].name})
    const contactButton = screen.getByRole('button', {name: sidebarButtonProps[3].name})

    expect(homeButton).toBeInTheDocument()
    expect(aboutButton).toBeInTheDocument()
    expect(experienceButton).toBeInTheDocument()
    expect(contactButton).toBeInTheDocument()
  })

  it('defaults to HomePage', async () => {
    expect(screen.getByText(profile.quote)).toBeInTheDocument()
  })

  it('navigates to the AboutPage when clicked', async () => {
    const aboutButton = screen.getByRole('button', {name: sidebarButtonProps[1].name})
    await userEvent.click(aboutButton)
    expect(screen.getByText(ABOUT_PAGE_TITLE)).toBeInTheDocument()
  })

  it('navigates to the ExperiencePage when clicked', async () => {
    const experienceButton = screen.getByRole('button', {name: sidebarButtonProps[2].name})
    await userEvent.click(experienceButton)
    expect(screen.getByText(PROJECTS)).toBeInTheDocument()
    expect(screen.getByText(TYPICAL_DAY)).toBeInTheDocument()
  })

  it('navigates to the ContactPage when clicked', async () => {
    const contactButton = screen.getByRole('button', {name: sidebarButtonProps[3].name})
    await userEvent.click(contactButton)
    expect(screen.getByText(profile.contactPageMessage)).toBeInTheDocument()
  })
})
