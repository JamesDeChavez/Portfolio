import { useLayoutEffect, useRef } from 'react'
import gsap, { Bounce, Circ, Elastic } from 'gsap'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileBeam } from '@fortawesome/free-regular-svg-icons'

const ContactSection = () => {
    
    const formElementRef = useRef(null)
    const thanksElementRef = useRef(null)
    const smileElementRef = useRef(null)
    const formTimelineRef = useRef<gsap.core.Timeline>()
    const smileTimelineRef = useRef<gsap.core.Timeline>()

    useLayoutEffect(() => {
        const gsapContext = gsap.context(() => {
            formTimelineRef.current = gsap.timeline({ paused: true })
                .to(formElementRef.current, { duration: 1, scale: 0.1 })
                .to(formElementRef.current, { duration: 0.5, x: '200%' })
                .set(thanksElementRef.current, { display: 'flex', x: '-200%'})
                .from(thanksElementRef.current, { duration: 0.5, x: '-200%', ease: Elastic.easeOut })
                .to(smileElementRef.current, { duration: 0.2, rotate: 40, delay: -.2 })
                .to(smileElementRef.current, { duration: 1, y: '20vh', ease: Bounce.easeOut })

            smileTimelineRef.current = gsap.timeline({ paused: true })
                .to(smileElementRef.current, { duration: 1, y: '0', ease: Circ.easeOut })
                .to(smileElementRef.current, { duration: 1, y: '20vh', ease: Bounce.easeOut })
                .to(smileElementRef.current, { duration: 2, rotate: 360, delay: -2 })

            return () => gsapContext.revert()
        })
    }, [])

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (formTimelineRef.current) formTimelineRef.current.play()
    }

    const handleSmileClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        e.preventDefault()
        if (smileTimelineRef.current) smileTimelineRef.current.restart()
    }

    const className = 'ContactSection'
    return (
        <div className={className} >
            <h3 className={`${className}_header`}>
                <span>{'<'}</span>Contact<span>{'/>'}</span>
            </h3>
            <p className={`${className}_text`}>
                Duis mollit amet fugiat ea sunt mollit in. Cillum culpa anim ipsum dolor officia aliqua aliqua cillum exercita nostrud consequat velit. 
            </p>
            <form className={`${className}_form`} onSubmit={handleFormSubmit} ref={formElementRef} >
                <div className={`${className}_inputContainer`}>
                    <label htmlFor="name" className={`${className}_label`}>Name</label>
                    <input type="text" className={`${className}_textInput`} />
                </div>
                <div className={`${className}_inputContainer`}>
                    <label htmlFor="email" className={`${className}_label`}>Email</label>
                    <input type="email" className={`${className}_textInput`} />
                </div>
                <div className={`${className}_inputContainer`}>
                    <label htmlFor="message" className={`${className}_label`}>Message</label>
                    <textarea name="message" id="message" className={`${className}_textarea`}></textarea>
                </div>
                <div className={`${className}_buttonContainer`}>
                    <input className={`${className}_submit`} type="submit" value="Send Message" />
                </div>
            </form>
            <div className={`${className}_thanks`} ref={thanksElementRef}>
                <p>Thanks for the Message!</p>
                <FontAwesomeIcon icon={faSmileBeam} className={`${className}_smile`} ref={smileElementRef} onClick={handleSmileClick} />
            </div>
        </div>
    )
}

export default ContactSection