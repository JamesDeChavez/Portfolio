import { render, screen, act, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from '../components/Navbar'

describe('Navbar', () => {
    it('should render hamburger button and be visible', () => {
        act(() => render(<Navbar/>))
        const hamburgerElement = screen.getByTitle('Burger Icon Button')
        expect(hamburgerElement).toBeInTheDocument()
        expect(hamburgerElement).toBeVisible()
    })
    it('should render topRow', () => {
        act(() => render(<Navbar/>))

        const topRowElement = screen.getByRole('button', { name: /James DeChavez/i })
        expect(topRowElement).toBeInTheDocument()
    })
    it('should render nav buttons', () => {
        act(() => render(<Navbar/>))

        const homeNavButton = screen.getByRole('button', { name: /Home/i })
        const aboutNavButton = screen.getByRole('button', { name: /About/i })
        const projectsNavButton = screen.getByRole('button', { name: /Projects/i })
        const contactNavButton = screen.getByRole('button', { name: /Contact/i })
        expect(homeNavButton).toBeInTheDocument()
        expect(aboutNavButton).toBeInTheDocument()
        expect(projectsNavButton).toBeInTheDocument()
        expect(contactNavButton).toBeInTheDocument()
    })
})