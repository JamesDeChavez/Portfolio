import './styles.css'

const AboutSection = () => {
    const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'jQuery', 'BootStrap', 'GSAP', 'React', 'Redux', 'Jest','Apollo GraphQL', 'Node', 'Express', 'SQL', 'MongoDB', 'Git', 'Python']

    const className = 'AboutSection'
    return (
        <div className={className}>
            <h3 className={`${className}_header`}>
                <span>{'<'}</span>About<span>{'/>'}</span>
            </h3>
            <div className={`${className}_textSection`}>
                <p className={`${className}_text`}>
                    Hi, I'm <span className={`${className}_bold`}>James DeChavez</span>.<br/>
                </p>
                <p className={`${className}_text`}>
                    Amet fugiat velit ipsum sint anim do tempor officia officia incididunt. Ullamco ea ex proident proident mollit minim deserunt laboris ipsum quis laboris. 
                </p>
            </div>
            <div className={`${className}_skillsSection`}>
                <p className={`${className}_text ${className}_bold`}>
                    My Skills
                </p>
                <div className={`${className}_skillsContainer`}>
                    {skills.map(skill => {
                        return <p className={`${className}_skill`}>{skill}</p>
                    })}
                </div>
            </div>


        </div>
    )
}

export default AboutSection