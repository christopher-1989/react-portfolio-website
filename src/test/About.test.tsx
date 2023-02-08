import {render, screen} from '@testing-library/react'
import {profile} from "../store/profile"
import AboutPage from "../routes/AboutPage"

const {
  name,
  bio,
} = profile

describe('About page', () => {
  it('renders all text components', () => {
    render(<AboutPage />)

    const nameHeading = screen.getByRole('heading', {name: name})

    expect(nameHeading).toHaveTextContent(name)
    const paragraphs = bio.split('\n')
    paragraphs.forEach(text => expect(screen.getByText(text)).toBeInTheDocument())
  })
})
