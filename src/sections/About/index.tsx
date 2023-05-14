import gsap, { Power1 } from 'gsap'
import { useLayoutEffect } from 'react'
import HeaderScene from '../../three/components/HeaderScene';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css'
import { Vector3 } from 'three';

gsap.registerPlugin(ScrollTrigger)

const AboutSection = () => {
    const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'jQuery', 'BootStrap', 'GSAP', 'React', 'Redux', 'Jest','Apollo GraphQL', 'Node.js', 'Express', 'SQL', 'MongoDB', 'Three.js']

    useLayoutEffect(() => {
        const gsapContext = gsap.context(() => {

            //Animations on Scroll - ENTER WINDOW
            gsap.fromTo('.AboutSection_header', { x: '-10vw'}, {
                x: 0,
                scrollTrigger: {
                    trigger: '.AboutSection_header',
                    start: 'top bottom',
                    end: 'bottom 80%',
                    toggleActions: 'restart none none none'
                }
            }) 
            gsap.fromTo('.AboutSection_headerWide', { x: '-10vw' }, {
                x: 0,
                scrollTrigger: {
                    trigger: '.AboutSection_header',
                    start: 'top bottom',
                    end: 'bottom 80%',
                    toggleActions: 'restart none none none'
                }
            })            
            gsap.fromTo('.AboutSection_textSection', { x: '-10vw' }, {
                x: 0,
                scrollTrigger: {
                    trigger: '.AboutSection_textSection',
                    start: 'top bottom',
                    end: 'bottom 80%',
                    toggleActions: 'restart none none none'
                }
            })            
            gsap.fromTo('.AboutSection_skillsSection', { x: '20vw' }, {
                x: 0,
                scrollTrigger: {
                    trigger: '.AboutSection_skillsSection',
                    start: 'top bottom',
                    end: 'bottom 80%',
                    toggleActions: 'restart none none none'
                }
            })
            gsap.fromTo('.AboutSection_callToAction', { x: '-10vw' }, {
                x: 0,
                transformOrigin: 'left',
                scrollTrigger: {
                    trigger: '.AboutSection_callToAction',
                    start: 'top bottom+=100',
                    end: 'bottom 95%',
                    toggleActions: 'restart none none none'
                }
            })

            return () => gsapContext.revert()
        })
    }, [])

    const handleContactClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        gsap.to(window, { scrollTo: ".ContactSection", duration: 1, ease: Power1.easeOut })
    }

    const handleProjectsClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        gsap.to(window, { scrollTo: ".ProjectsSection", duration: 1, ease: Power1.easeOut })
    }

    const className = 'AboutSection'
    return (
        <div className={className} >
            <div className={`${className}_header`}>
                <HeaderScene text='About' camPosition={new Vector3(0.4, 0, 3)} lookAt={new Vector3(0.4, 0, 0)} scrollTo='.AboutSection' />
            </div>
            <div className={`${className}_headerWide`}>
                <HeaderScene text='About' camPosition={new Vector3(0, 0, 2)} scrollTo='.AboutSection' />
            </div>
            <div className={`${className}_textSection`}>
                <p className={`${className}_text`}>
                    Hi, I'm <span className={`${className}_bold`}>James DeChavez</span>.<br/>
                </p>
                <p className={`${className}_text`}>
                I'm a Fullstack Developer looking for opportunities to contribute to projects that solve interesting problems. I always enjoy learning new skills and finding better ways to do things.    
                </p> 
                <p className={`${className}_text`}>
                    {`Check out my `} 
                    <button 
                        className={`${className}_projectsButton ${className}_bold`}
                        onClick={handleProjectsClick}
                    >Projects</button> 
                    {` section below for examples of applications I've created to assist me in learning and to simplify areas of my routine.`}
                </p>
            </div>
            <div className={`${className}_skillsSection`}>
                <p className={`${className}_text ${className}_bold`}>
                    My Skills
                </p>
                <div className={`${className}_skillsContainer`}>
                    {skills.map((skill, i) => {
                        return <p className={`${className}_skill`} key={i}>{skill}</p>
                    })}
                </div>
            </div>
            <div className={`${className}_callToAction`}>
                <p className={`${className}_text`}>
                    Have an opportunity that matches my skill set? Don't hesitate to reach out!
                </p>
                <button className={`${className}_button`} onClick={handleContactClick}>Contact Me</button>
            </div>
        </div>
    )
}

export default AboutSection