import './styles.css'

const ProjectsSection = () => {
    const className = 'ProjectsSection'
    const image = require('../../assets/placeholder.png')
    return (
        <div className={className} >
            <h3 className={`${className}_header`}>
                <span>{'<'}</span>Projects<span>{'/>'}</span>
            </h3>
            <div className={`${className}_projectContainer`}>
                <img className={`${className}_projectImage`} src={image} alt="placeholder" />
                <div className={`${className}_descriptionContainer`}>
                    <div className={`${className}_textContainer`}>
                        <p className={`${className}_text ${className}_bold`}>TFT Roll-Down Training Tool</p>
                        <p className={`${className}_text`}>Labore occaecat quis occaecat cillum esse aute fugiat. Exercitation est culpa adipisicing nostrud non aliqua id ipsum.</p>
                    </div>
                    <div className={`${className}_buttonContainer`}>
                        <button className={`${className}_button`}>Visit Website</button>
                    </div>
                </div>
            </div>
            <div className={`${className}_projectContainer`}>
                <img className={`${className}_projectImage`} src={image} alt="placeholder" />
                <div className={`${className}_descriptionContainer`}>
                    <div className={`${className}_textContainer`}>
                        <p className={`${className}_text ${className}_bold`}>TFT Roll-Down Training Tool</p>
                        <p className={`${className}_text`}>Labore occaecat quis occaecat cillum esse aute fugiat. Exercitation est culpa adipisicing nostrud non aliqua id ipsum.</p>
                    </div>
                    <div className={`${className}_buttonContainer`}>
                        <button className={`${className}_button`}>Visit Website</button>
                    </div>
                </div>
            </div>
            <div className={`${className}_projectContainer`}>
                <img className={`${className}_projectImage`} src={image} alt="placeholder" />
                <div className={`${className}_descriptionContainer`}>
                    <div className={`${className}_textContainer`}>
                        <p className={`${className}_text ${className}_bold`}>TFT Roll-Down Training Tool</p>
                        <p className={`${className}_text`}>Labore occaecat quis occaecat cillum esse aute fugiat. Exercitation est culpa adipisicing nostrud non aliqua id ipsum.</p>
                    </div>
                    <div className={`${className}_buttonContainer`}>
                        <button className={`${className}_button`}>Visit Website</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection