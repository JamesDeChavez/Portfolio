import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProjectsSection from '../sections/Projects'

jest.mock('../three/components/HeaderScene')

describe('Projects', () => {
    it('should render free tier text', () => {
        render(<ProjectsSection/>)
        const freetierElement = screen.getByText('free tier', { exact: false })
        expect(freetierElement).toBeInTheDocument()
    })
    it('should render 3 projects with image, text and buttons', () => {
        render(<ProjectsSection/>)
        const projectOneHeader = screen.getByText('singlepagerecipes.com')
        const projectTwoHeader = screen.getByText('bsdrank.com')
        const projectThreeHeader = screen.getByText('tftrolldown.com')
        const projectImages = screen.getAllByRole('img')
        const websiteButtons = screen.getAllByRole('link', { name: /Visit Website/i })
        const githubButtons = screen.getAllByRole('link', { name: /Github/i })

        expect(projectOneHeader).toBeInTheDocument()
        expect(projectTwoHeader).toBeInTheDocument()
        expect(projectThreeHeader).toBeInTheDocument()
        expect(projectImages.length).toBe(3)
        expect(websiteButtons.length).toBe(3)
        expect(githubButtons.length).toBe(3)
    })
})