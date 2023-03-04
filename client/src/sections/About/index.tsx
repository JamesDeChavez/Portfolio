import gsap, { Power1 } from 'gsap'
import './styles.css'


const AboutSection = () => {
    const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'jQuery', 'BootStrap', 'GSAP', 'React', 'Redux', 'Jest','Apollo GraphQL', 'Node', 'Express', 'SQL', 'MongoDB', 'Git', 'Python']

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        gsap.to(window, { scrollTo: ".ContactSection", duration: 1, ease: Power1.easeOut })
    }

    const className = 'AboutSection'
    return (
        <div className={className} id={className} >
            <h3 className={`${className}_header`}>
                <span>{'<'}</span>About<span>{'/>'}</span>
            </h3>
            <div className={`${className}_textSection`}>
                <p className={`${className}_text`}>
                    Hi, I'm <span className={`${className}_bold`}>James DeChavez</span>.<br/>
                </p>
                <p className={`${className}_text`}>
                    Amet fugiat velit ipsum sint anim do tempor officia officia incididunt. Ullamco ea ex proident proident. 
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
                <button className={`${className}_button`} onClick={handleButtonClick}>Contact Me</button>
            </div>


        </div>
    )
}

export default AboutSection