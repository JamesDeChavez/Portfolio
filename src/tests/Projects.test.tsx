import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProjectsSection from '../sections/Projects'

describe('Projects', () => {
    it('should render header', () => {
        render(<ProjectsSection/>)
        const headerElement = screen.getByText('Projects')
        expect(headerElement).toBeInTheDocument()
    })
    it('should render free tier text', () => {
        render(<ProjectsSection/>)
        const freetierElement = screen.getByText('free tier', { exact: false })
        expect(freetierElement).toBeInTheDocument()
    })
    it('should render 3 projects with image, text and buttons', () => {
        render(<ProjectsSection/>)
        const projectOneHeader = screen.getByText('Single Page Recipes')
        const projectTwoHeader = screen.getByText('BSD Rank')
        const projectThreeHeader = screen.getByText('TFT Roll-Down Training Tool')
        const projectImages = screen.getAllByRole('img')
        const websiteButtons = screen.getAllByRole('button', { name: /Visit Website/i })
        const githubButtons = screen.getAllByRole('button', { name: /Github/i })

        expect(projectOneHeader).toBeInTheDocument()
        expect(projectTwoHeader).toBeInTheDocument()
        expect(projectThreeHeader).toBeInTheDocument()
        expect(projectImages.length).toBe(3)
        expect(websiteButtons.length).toBe(3)
        expect(githubButtons.length).toBe(3)
    })
})