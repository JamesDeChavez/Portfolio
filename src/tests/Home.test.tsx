import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import HomeSection from '../sections/Home'

describe('Home', () => {
    it('should render contact button', () => {
        render(<HomeSection/>)
        const contactButton = screen.getByText('Contact Me')
        expect(contactButton).toBeInTheDocument()
    })
    it('should render scroll button', () => {
        render(<HomeSection/>)
        const scrollButton = screen.getByText('Scroll')
        expect(scrollButton).toBeInTheDocument()
    })
    it('should render letters in my name James DeChavez', () => {
        render(<HomeSection/>)
        const firstName = 'James'
        const lastName = 'DeChavez'
        const totalLetters = firstName.length + lastName.length
        const letterElements = screen.getAllByRole('heading')
        expect(letterElements.length).toBe(totalLetters)
    })
    it('should render underscore initially', () => {
        render(<HomeSection/>)
        const letterElement = screen.getByText('_')
        expect(letterElement).toBeInTheDocument()
    })
})