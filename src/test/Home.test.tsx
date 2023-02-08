import {render, screen} from '@testing-library/react'
import {profile} from "../store/profile"
import HomePage from "../routes/HomePage"

const {
  name,
  title,
  about,
  quote
} = profile

describe('Home page', () => {
  it('renders all components buttons', () => {
    render(<HomePage />)

    const nameHeading = screen.getByRole('heading', {name: name})
    const titleHeading = screen.getByRole('heading', {name: title})
    const headshotImage = screen.getByRole('img', {name: "profile-headshot"})
    const quoteText = screen.getByRole('quote')
    const bioText = screen.getByRole('about-me-description')
    const skillComponents = screen.getByText('Skills:')

    expect(nameHeading).toBeInTheDocument()
    expect(titleHeading).toBeInTheDocument()
    expect(headshotImage).toBeInTheDocument()
    expect(quoteText).toHaveTextContent(quote)
    expect(bioText).toHaveTextContent(about)
    expect(skillComponents).toBeInTheDocument()
  })
})
