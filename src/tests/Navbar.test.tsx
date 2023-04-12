import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from '../components/Navbar'

describe('Navbar', () => {
    it('should render hamburger button', () => {
        act(() => render(<Navbar/>))
        const hamburgerElement = screen.getByTitle('Burger Icon Button')
        expect(hamburgerElement).toBeInTheDocument
    })
})