import gsap from 'gsap'
import { useLayoutEffect } from 'react'
import { ReactComponent as SvgBackground } from '../../assets/polygon-scatter-haikei-mobile.svg'
import './styles.css'

const ProjectsSection = () => {

    useLayoutEffect(() => {
        const gsapContext = gsap.context(() => {

            //Animations on Render
            gsap.to(['.path1', '.path2', '.path3'], {
                rotate: 360,
                duration: 100,
                repeat: -1,
                transformOrigin: 'center'
            })

            //Animations on Scroll - ENTER WINDOW
            gsap.from('.ProjectsSection_header', {
                x: '-10vw',
                scrollTrigger: {
                    trigger: '.ProjectsSection_header',
                    start: 'top bottom',
                    end: 'bottom 90%',
                    toggleActions: 'restart none none none',
                    scrub: 3
                }
            })

            const imageOverlays = gsap.utils.toArray('.ProjectsSection_imageOverlay')
            imageOverlays.forEach((overlay: any) => {
                gsap.to(overlay, {
                    width: 0,
                    scrollTrigger: {
                        trigger: overlay,
                        start: 'top bottom',
                        end: 'bottom 90%',
                        toggleActions: 'restart none none none',
                        scrub: 3
                    }
                })
            })

            const textSections = gsap.utils.toArray('.ProjectsSection_textContainer')
            textSections.forEach((section: any) => {
                gsap.from(section, {
                    x: '10vw',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top bottom',
                        end: 'bottom 90%',
                        toggleActions: 'restart none none none',
                        scrub: 3
                    }
                })
            })

            const projectButtons = gsap.utils.toArray('.ProjectsSection_button')
            projectButtons.forEach((button: any) => {
                gsap.from(button, {
                    x: '10vw',
                    scrollTrigger: {
                        trigger: button,
                        start: 'top bottom',
                        end: 'bottom 95%',
                        toggleActions: 'restart none none none',
                        scrub: 3
                    }
                })
            })
            
            return () => gsapContext.revert()
        })
    }, [])

    const image = require('../../assets/placeholder.png')
    const className = 'ProjectsSection'
    return (
        <div className={className} >
            <SvgBackground className={`${className}_background`}/>
            <h3 className={`${className}_header`}>
                <span>{'<'}</span>Projects<span>{'/>'}</span>
            </h3>
            <div className={`${className}_projectContainer`}>
                <div className={`${className}_imageContainer`}>
                    <img className={`${className}_projectImage`} src={image} alt="placeholder" />
                    <div className={`${className}_imageOverlay`}></div>
                </div>
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
                <div className={`${className}_imageContainer`}>
                    <img className={`${className}_projectImage`} src={image} alt="placeholder" />
                    <div className={`${className}_imageOverlay`}></div>
                </div>
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
                <div className={`${className}_imageContainer`}>
                    <img className={`${className}_projectImage`} src={image} alt="placeholder" />
                    <div className={`${className}_imageOverlay`}></div>
                </div>
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