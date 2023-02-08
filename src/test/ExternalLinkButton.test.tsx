import {render, screen} from '@testing-library/react'
import { FaCheckCircle } from "react-icons/fa"
import { ExternalLinkButton } from "../components/ExternalLinkButton"
import { LinkButtonProps } from "../components/LinkButton"

const DEFAULT_PROPS: LinkButtonProps = {
  name: "test button",
  icon: <FaCheckCircle />,
  href: "externalroute"
} 

describe('About page', () => {
  jest.spyOn(console, 'error').mockImplementation(() => {})


  beforeEach(() => render(<ExternalLinkButton {...DEFAULT_PROPS} />))

  it('renders a button a name as a label', () => {
    const button = screen.getByText(DEFAULT_PROPS.name)
    expect(button).toBeInTheDocument()
  })

  it('renders link with href', () => {
    const link = screen.getByRole('link')
    expect(link).toHaveProperty('href', `http://localhost/${DEFAULT_PROPS.href}`)
  })

  it('has an active link', () => {
    const link = screen.getByRole('link')
    expect(link).toBeEnabled()
    const button = screen.getByText(DEFAULT_PROPS.name)
    expect(button).toBeEnabled()
  })
})