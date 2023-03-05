import { useState, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import emailjs from '@emailjs/browser'
import './styles.css'

interface Props {
    formElementRef: React.MutableRefObject<null>,
    formTimelineRef: React.MutableRefObject<gsap.core.Timeline | undefined>
}

const ContactForm: React.FC<Props> = ({ formElementRef, formTimelineRef }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    
    //Refs for Animations
    const nameRef = useRef<gsap.core.Tween>()
    const emailRef = useRef<gsap.core.Tween>()
    const messageRef = useRef<gsap.core.Tween>()

    useLayoutEffect(() => {
        const gsapContext = gsap.context(() => {

            nameRef.current = gsap.to('#nameLabel', {
                paused: true, y: '-100%', duration: 0.5
            })

            emailRef.current = gsap.to('#emailLabel', {
                paused: true, y: '-100%', duration: 0.5
            })

            messageRef.current = gsap.to('#messageLabel', {
                paused: true, y: '-100%', duration: 0.5
            })

            return () => gsapContext.revert()
        })
    }, [])

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!name || !email || !message) return

        try {
            const response = await fetch('http://localhost:3001/emailjs')
            const data = await response.json()
            const serviceId = data.service
            const templateId = data.template
            const publicId = data.public

            if (formElementRef.current) {
            emailjs.sendForm(serviceId, templateId, formElementRef.current, publicId)
                .then((result) => {
                    console.log(result.text)
                    if (formTimelineRef.current) formTimelineRef.current.play()
                }, err => console.log(err.text))
            }
        } catch (error) {
            console.log(error)
        }

    }

    const handleInputFocus = (e: (React.FocusEvent<HTMLTextAreaElement, Element> | React.FocusEvent<HTMLInputElement, Element>)) => {

        switch(e.target.id) {
            case 'name':
                if (nameRef.current) nameRef.current.play()
                break
            case 'email':
                if (emailRef.current) emailRef.current.play()
                break
            case 'message':
                if (messageRef.current) messageRef.current.play()
                break
            default: break
        }

    }

    const handleInputBlur = (e: (React.FocusEvent<HTMLTextAreaElement, Element> | React.FocusEvent<HTMLInputElement, Element>)) => {
        switch(e.target.id) {
            case 'name':
                if (nameRef.current && name === '' ) nameRef.current.reverse()
                break
            case 'email':
                if (emailRef.current && email === '' ) emailRef.current.reverse()
                break
            case 'message':
                if (messageRef.current && message === '' ) messageRef.current.reverse()
                break
            default: break
        }
    }

    const className = 'ContactForm'
    return (
        <form className={className} onSubmit={handleFormSubmit} ref={formElementRef}>
            <div className={`${className}_inputContainer`}>
                <label htmlFor="name" id="nameLabel" className={`${className}_label`}>Name</label>
                <input id="name" name="name" type="text" className={`${className}_textInput`} 
                    value={name} onChange={(e) => setName(e.target.value)} autoComplete='off' onFocus={handleInputFocus} onBlur={handleInputBlur} required/>
            </div>
            <div className={`${className}_inputContainer`}>
                <label htmlFor="email" id='emailLabel' className={`${className}_label`}>Email</label>
                <input id="email" name="email" type="email" className={`${className}_textInput`}
                    value={email} onChange={(e) => setEmail(e.target.value) }  autoComplete='off' onFocus={handleInputFocus} onBlur={handleInputBlur} required/>
            </div>
            <div className={`${className}_inputContainer`}>
                <label htmlFor="message" id='messageLabel' className={`${className}_label`}>Message</label>
                <textarea name="message" id="message" className={`${className}_textarea`}
                    value={message} onChange={(e) => setMessage(e.target.value)} autoComplete='off' onFocus={handleInputFocus} onBlur={handleInputBlur} required></textarea>
            </div>
            <div className={`${className}_buttonContainer`}>
                <input className={`${className}_submit`} type="submit" value="Send Message" />
            </div>
        </form>
    )
}

export default ContactForm