import { useLayoutEffect, useRef } from 'react'
import gsap, { Bounce, Circ, Elastic } from 'gsap'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileBeam } from '@fortawesome/free-regular-svg-icons'
import ContactForm from '../../components/ContactForm'

const ContactSection = () => {
    
    const formElementRef = useRef(null)
    const thanksElementRef = useRef(null)
    const smileElementRef = useRef(null)
    const formTimelineRef = useRef<gsap.core.Timeline>()
    const smileTimelineRef = useRef<gsap.core.Timeline>()

    useLayoutEffect(() => {
        const gsapContext = gsap.context(() => {            
            //Animation on Scroll - ENTER WINDOW
            gsap.from('.ContactSection_header', {
                x: '-10vw',
                scrollTrigger: {
                    trigger: '.ContactSection_header',
                    start: 'top bottom',
                    end: 'bottom 90%',
                    toggleActions: 'restart none none none',
                    scrub: 3
                }
            })
            gsap.from('.ContactSection_text', {
                x: '10vw',
                scrollTrigger: {
                    trigger: '.ContactSection_text',
                    start: 'top bottom',
                    end: 'bottom 90%',
                    toggleActions: 'restart none none none',
                    scrub: 3
                }
            })
            gsap.from('.ContactForm', {
                x: '-20vw',
                scrollTrigger: {
                    trigger: '.ContactForm',
                    start: 'top bottom',
                    end: 'bottom 90%',
                    toggleActions: 'restart none none none',
                    scrub: 3
                }
            })

            //Animations for after Message Send
            formTimelineRef.current = gsap.timeline({ paused: true })
                .to(formElementRef.current, { duration: 1, scale: 0.1 })
                .to(formElementRef.current, { duration: 0.5, x: '200%' })
                .set(formElementRef.current, { opacity: 0 })
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
                Use the form below to send me a message and I will get back to you as soon as possible.
            </p>
            <ContactForm formElementRef={formElementRef} formTimelineRef={formTimelineRef} />
            <div className={`${className}_thanks`} ref={thanksElementRef}>
                <p>Thanks for the Message!</p>
                <FontAwesomeIcon icon={faSmileBeam} className={`${className}_smile`} ref={smileElementRef} onClick={handleSmileClick} />
            </div>
        </div>
    )
}

export default ContactSection