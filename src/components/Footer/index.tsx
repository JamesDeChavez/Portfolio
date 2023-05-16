import { useLayoutEffect } from 'react'
import gsap, { Power1 } from 'gsap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './styles.css'

const Footer = () => {

    useLayoutEffect(() => {
        const gsapContext = gsap.context(() => {
            gsap.from('.FooterSection_iconContainer', {
                x: '-10vw',
                scrollTrigger: {
                    trigger: '.FooterSection_iconContainer',
                    start: 'top bottom',
                    end: 'bottom bottom',
                    toggleActions: 'restart none none none',
                    scrub: 3
                }
            })
            gsap.from('.FooterSection_name', {
                x: '-10vw',
                scrollTrigger: {
                    trigger: '.FooterSection_name',
                    start: 'top bottom',
                    end: 'bottom bottom',
                    toggleActions: 'restart none none none',
                    scrub: 3
                }
            })
            gsap.from('.FooterSection_text', {
                x: '-10vw',
                scrollTrigger: {
                    trigger: '.FooterSection_text',
                    start: 'top bottom',
                    end: 'bottom bottom',
                    toggleActions: 'restart none none none',
                    scrub: 3
                }
            })

            return () => gsapContext.revert()
        })
    }, [])

    const handleNameClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        gsap.to(window, { scrollTo: ".HomeSection", duration: 1, ease: Power1.easeOut })
    }

    const className = 'Footer'
    return (
        <div className={className}>

            <div className={`${className}_iconContainer`}>
                <a href='https://www.linkedin.com/in/james-dechavez-120176142/' target="_blank" rel="noreferrer" aria-label='Linkedin Link' >
                    <FontAwesomeIcon icon={faLinkedin} className={`${className}_icon`} />
                </a>
                    
                <a href='https://github.com/JamesDeChavez' target="_blank" rel="noreferrer" aria-label='Github Link' >
                    <FontAwesomeIcon icon={faGithub} className={`${className}_icon`} />
                </a>            
            </div>

            <div className={`${className}_nameContainer`}>
                <button className={`${className}_name`} onClick={handleNameClick}>
                    James DeChavez
                </button>
            </div>
            
            <div className={`${className}_text`}>
                Fullstack Developer - Problem Solver - Automation Addict - Data Driven
            </div>
        </div>
    )
}

export default Footer