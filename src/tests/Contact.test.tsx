import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import emailjs from '@emailjs/browser'
import ContactSection from '../sections/Contact'

jest.mock('../three/components/HeaderScene')

describe('Contact', () => {
    const className = 'ContactSection'
    it('should render text instructions', () => {
        render(<ContactSection/>)
        const instructionsElement = screen.getByText('Use the form', { exact: false })
        expect(instructionsElement).toBeInTheDocument()
    })
    it('should render thank you message and have correct class (for display: none)', () => {
        render(<ContactSection/>)
        const thanksElement = screen.getByText('Thanks for the Message!')        
        expect(thanksElement).toBeInTheDocument()
        expect(thanksElement.closest('div')).toHaveClass(`${className}_thanks`)
    })
    it('should render 2 inputs and 1 textarea and 3 labels and 1 button', () => {
        render(<ContactSection/>)
        const inputElements = screen.getAllByRole('textbox')
        const labelOne = screen.getByLabelText('Name')
        const labelTwo = screen.getByLabelText('Email')
        const labelThree = screen.getByLabelText('Message')
        const buttonElement = screen.getByRole('button')
        expect(inputElements.length).toBe(3)
        expect(labelOne).toBeInTheDocument()
        expect(labelTwo).toBeInTheDocument()
        expect(labelThree).toBeInTheDocument()
        expect(buttonElement).toBeInTheDocument()
    })
    describe('user fills out the form inputs and textarea and clicks submit', () => {
        const testName = 'James'
        const testEmail = 'test@gmail.com'
        const testMessage = 'Test Message'
        it('should update input and textarea elements correctly', async () => {
            render(<ContactSection/>)
            const nameInput = screen.getByLabelText('Name').closest('input')
            const emailInput = screen.getByLabelText('Email').closest('input')
            const messageInput = screen.getByLabelText('Message').closest('textarea')
            if (!nameInput || !emailInput || !messageInput) {
                expect(true).toBe(false)
            }
            else {
                userEvent.type(nameInput, testName)
                userEvent.type(emailInput, testEmail)
                userEvent.type(messageInput, testMessage)
                expect(nameInput.value).toBe(testName)
                expect(emailInput.value).toBe(testEmail)
                expect(messageInput.value).toBe(testMessage)
            }            
        })
        it('should submit form with emailjs', async () => {
            const spy = jest.spyOn(emailjs, 'sendForm')
            render(<ContactSection/>)
            const buttonElement = screen.getByRole('button')
            const nameInput = screen.getByLabelText('Name').closest('input')
            const emailInput = screen.getByLabelText('Email').closest('input')
            const messageInput = screen.getByLabelText('Message').closest('textarea')
            if (!nameInput || !emailInput || !messageInput) {
                expect(true).toBe(false)
            }
            else {
                userEvent.type(nameInput, testName)
                userEvent.type(emailInput, testEmail)
                userEvent.type(messageInput, testMessage)
                userEvent.click(buttonElement)
                expect(spy).toHaveBeenCalled()
            }            
        })
    })
})