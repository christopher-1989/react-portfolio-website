import {render, screen} from '@testing-library/react'
import {profile} from "../store/profile"
import {ContactPage} from "../routes/ContactPage"
import {contactButtonProps} from "../components/contactButtonProps"

const {
  name,
  contactPageMessage
} = profile

const CONTACT_BUTTONS = contactButtonProps

describe('Contact page', () => {
  it('renders all components buttons', () => {
    render(<ContactPage />)

    const nameHeading = screen.getByRole('heading', {name: name})
    const contactButtons = screen.getAllByRole('button')

    expect(nameHeading).toHaveTextContent(name)
    expect(contactButtons).toHaveLength(2)
    expect(screen.getByText(contactPageMessage)).toBeInTheDocument()
    expect(contactButtons[0]).toHaveTextContent(CONTACT_BUTTONS[0].name)
    expect(contactButtons[1]).toHaveTextContent(CONTACT_BUTTONS[1].name)
  })
})
