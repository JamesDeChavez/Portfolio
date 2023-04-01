import gsap, { Power1 } from 'gsap'
import { useLayoutEffect } from 'react'
import './styles.css'


const AboutSection = () => {
    const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'jQuery', 'BootStrap', 'GSAP', 'React', 'Redux', 'Jest','Apollo GraphQL', 'Node', 'Express', 'SQL', 'MongoDB', 'Git']

    useLayoutEffect(() => {
        const gsapContext = gsap.context(() => {

            //Animations on Scroll - ENTER WINDOW
            gsap.from('.AboutSection_header', {
                x: '-10vw',
                scrollTrigger: {
                    trigger: '.AboutSection_header',
                    start: 'top bottom',
                    end: 'bottom 80%',
                    toggleActions: 'restart none none none',
                    scrub: 3
                }
            })            
            gsap.from('.AboutSection_textSection', {
                x: '-10vw',
                scrollTrigger: {
                    trigger: '.AboutSection_textSection',
                    start: 'top bottom',
                    end: 'bottom 80%',
                    toggleActions: 'restart none none none',
                    scrub: 3
                }
            })            
            gsap.from('.AboutSection_skillsSection', {
                x: '20vw',
                scrollTrigger: {
                    trigger: '.AboutSection_skillsSection',
                    start: 'top bottom',
                    end: 'bottom 80%',
                    toggleActions: 'restart none none none',
                    scrub: 3
                }
            })
            gsap.from('.AboutSection_callToAction', {
                x: '-10vw',
                transformOrigin: 'left',
                scrollTrigger: {
                    trigger: '.AboutSection_callToAction',
                    start: 'top bottom+=100',
                    end: 'bottom 95%',
                    toggleActions: 'restart none none none',
                    scrub: 3
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
            <h3 className={`${className}_header`}>
                <span>{'<'}</span>About<span>{'/>'}</span>
            </h3>
            <div className={`${className}_textSection`}>
                <p className={`${className}_text`}>
                    Hi, I'm <span className={`${className}_bold`}>James DeChavez</span>.<br/>
                </p>
                <p className={`${className}_text`}>
                    I'm a Fullstack Developer looking for opportunites to contribute to projects that solve intersting problems. I always enjoy learning new skills and finding better ways to do things.
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