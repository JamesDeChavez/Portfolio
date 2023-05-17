import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from '../components/Navbar'

describe('Navbar', () => {
    const className = 'Navbar'
    it('should render hamburger button and have correct class (to be visible)', () => {
        render(<Navbar/>)
        const hamburgerElement = screen.getByTestId('BurgerIconButton')
        expect(hamburgerElement).toBeInTheDocument()
        expect(hamburgerElement).toHaveClass(`${className}_hamburgerContainer`)
    })
    it('should render header button and have correct class (for display: none)', () => {
        render(<Navbar/>)
        const headerButton = screen.getByRole('button', { name: /James DeChavez/i })
        expect(headerButton).toBeInTheDocument()
        expect(headerButton.closest('div')).toHaveClass(`${className}_topRow`)
    })
    it('should render nav buttons and have correct class (for display: none)', () => {
        render(<Navbar/>)
        const homeNavButton = screen.getByRole('button', { name: '< Home />' })
        const aboutNavButton = screen.getByRole('button', { name: '< About />' })
        const projectsNavButton = screen.getByRole('button', { name: '< Project />' })
        const contactNavButton = screen.getByRole('button', { name: '< Contact />' })
        expect(homeNavButton).toBeInTheDocument()
        expect(aboutNavButton).toBeInTheDocument()
        expect(projectsNavButton).toBeInTheDocument()
        expect(contactNavButton).toBeInTheDocument()
        expect(homeNavButton.closest('div')).toHaveClass(`${className}_buttonsContainer`)
    })
})