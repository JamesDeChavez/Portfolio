import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AboutSection from '../sections/About'

jest.mock('../three/components/HeaderScene')

describe('About', () => {
    it('should render about section text blocks', () => {
        render(<AboutSection/>)
        const textElement_One = screen.getByText('Hi,', { exact: false })
        const textElement_Two = screen.getByText('looking for opportunities', { exact: false })
        const textElement_Three = screen.getByText('reach out!', { exact: false })
        expect(textElement_One).toBeInTheDocument
        expect(textElement_Two).toBeInTheDocument
        expect(textElement_Three).toBeInTheDocument
    })
    it('should render skills text', () => {
        render(<AboutSection/>)
        const skillsHeader = screen.getByText('My Skills')
        const skillElement = screen.getByText('JavaScript')
        expect(skillsHeader).toBeInTheDocument()
        expect(skillElement).toBeInTheDocument()
    })
    it('should render Project button',  () => {
        render(<AboutSection/>)
        const projectButton = screen.getByRole('button', { name: /Project/i })
        expect(projectButton).toBeInTheDocument
    })
    it('should render Contact button',  () => {
        render(<AboutSection/>)
        const contactButton = screen.getByRole('button', { name: /Contact Me/i })
        expect(contactButton).toBeInTheDocument
    })

})