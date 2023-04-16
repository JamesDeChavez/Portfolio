import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../components/Footer'

describe('Footer', () => {
    it('should render 2 links', () => {
        render(<Footer/>)
        const linkElements = screen.getAllByRole('link')
        expect(linkElements.length).toBe(2)
    })
    it('should render 1 button', () => {
        render(<Footer/>)
        const buttonElement = screen.getByRole('button', { name: /James DeChavez/i })
        expect(buttonElement).toBeInTheDocument()
    })
    it('should render footer text', () => {
        render(<Footer/>)
        const footerTextElement = screen.getByText('Fullstack Developer', { exact: false })
        expect(footerTextElement).toBeInTheDocument()
    })
})