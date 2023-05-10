import gsap from 'gsap'
import { useLayoutEffect } from 'react'
import { ReactComponent as SvgBackground } from '../../assets/polygon-scatter-haikei-mobile2.svg'
import './styles.css'
import HeaderScene from '../../three/components/HeaderScene'
import { Vector3 } from 'three'

const ProjectsSection = () => {

    useLayoutEffect(() => {
        const gsapContext = gsap.context(() => {
            //Animations on Render
            gsap.to(['.path4', '.path5', '.path6'], {
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
                    end: 'bottom top',
                    toggleActions: 'restart none none none'
                }
            })

            gsap.from('.ProjectsSection_freeTier', {
                x: '10vw',
                scrollTrigger: {
                    trigger: '.ProjectsSection_header',
                    start: 'top bottom',
                    end: 'bottom top',
                    toggleActions: 'restart none none none'
                }
            })

            const imageOverlays = gsap.utils.toArray('.ProjectsSection_imageOverlay')
            imageOverlays.forEach((overlay: any) => {
                gsap.to(overlay, {
                    width: 0,
                    scrollTrigger: {
                        trigger: overlay,
                        start: 'top bottom',
                        end: 'center bottom',
                        toggleActions: 'restart none none reset',
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

            //Scroll Animations - EXIT WINDOW
            gsap.to(['.path4', '.path5', '.path6'], {
                x: -100,
                y: -200,
                scrollTrigger: {
                    trigger: '.ProjectsSection',
                    start: 'top bottom',
                    end: 'bottom center',
                    toggleActions: 'restart none none none',
                    scrub: 3
                }
            })            
            return () => gsapContext.revert()
        })
    }, [])

    const sprImage = require('../../assets/singlepagerecipes_webpage.png')
    const tftImage = require('../../assets/tftrolldown_webpage.png')
    const bsdImage = require('../../assets/bsdrank_webpage.png')
    const className = 'ProjectsSection'
    return (
        <div className={className} >
            <SvgBackground className={`${className}_background`}/>
            <div className={`${className}_header`}>
                <HeaderScene text='project' camPosition={new Vector3(0.4, 0, 3.5)} lookAt={new Vector3(0.4, 0, 0)} scrollTo='.ProjectsSection' />
            </div>
            <div className={`${className}_headerWide`}>
                <HeaderScene text='project' camPosition={new Vector3(0, 0, 2)} scrollTo='.ProjectsSection' />
            </div>
            <p className={`${className}_freeTier`}>* Projects use Render.com free tier server hosting. Please allow up to 30 seconds for first request to server.</p>
            <div className={`${className}_projectContainer`}>
                <div className={`${className}_imageContainer`}>
                    <img className={`${className}_projectImage`} src={sprImage} alt="webpage" />
                    <div className={`${className}_imageOverlay`}></div>
                </div>
                <div className={`${className}_descriptionContainer`}>
                    <div className={`${className}_textContainer`}>
                        <p className={`${className}_text ${className}_bold`}>
                            Single Page Recipes
                        </p>
                        <p className={`${className}_text`}>
                            A website I created to help users easily learn new recipes from Youtube, save them to their recipe books, and automatically add recipe ingredients to their Amazon Fresh shopping carts. 
                        </p>
                        <p className={`${className}_text`}>
                            Additionally, the single-page interface of the recipes ensures all important info is easily available while cooking. No annoying scrolling!
                        </p>
                    </div>
                    <div className={`${className}_buttonContainer`}>
                        <a href="https://www.singlepagerecipes.com" target="_blank" rel='noreferrer' >
                            <button className={`${className}_button`}>Visit Website</button>
                        </a>
                        <a href="https://github.com/JamesDeChavez/SinglePageRecipes" target="_blank" rel='noreferrer' >
                            <button className={`${className}_button`}>Github</button>
                        </a>  
                    </div>
                </div>
            </div>
            <div className={`${className}_projectContainer`}>
                <div className={`${className}_imageContainer`}>
                    <img className={`${className}_projectImage`} src={bsdImage} alt="webpage" />
                    <div className={`${className}_imageOverlay`}></div>
                </div>
                <div className={`${className}_descriptionContainer`}>
                    <div className={`${className}_textContainer`}>
                        <p className={`${className}_text ${className}_bold`}>
                            BSD Rank
                        </p>
                        <p className={`${className}_text`}>
                            A website I created to provide users with a rank to track their weightlifting progress, similar to the ranks players earn in video games. This rank is based on weightlifting data collected for over 1.6 million individuals. 
                        </p>
                        <p className={`${className}_text`}>
                            BSD Rank can help provide you with data-driven motivation to push to earn higher ranks and get stronger.
                        </p>
                    </div>
                    <div className={`${className}_buttonContainer`}>
                        <a href="https://www.bsdrank.com" target="_blank" rel='noreferrer' >
                            <button className={`${className}_button`}>Visit Website</button>
                        </a>
                        <a href="https://github.com/JamesDeChavez/BSDRank" target="_blank" rel='noreferrer' >
                            <button className={`${className}_button`}>Github</button>
                        </a>  
                    </div>
                </div>
            </div>
            <div className={`${className}_projectContainer`}>
                <div className={`${className}_imageContainer`}>
                    <img className={`${className}_projectImage`} src={tftImage} alt="webpage" />
                    <div className={`${className}_imageOverlay`}></div>
                </div>
                <div className={`${className}_descriptionContainer`}>
                    <div className={`${className}_textContainer`}>
                        <p className={`${className}_text ${className}_bold`}>TFT Roll-Down Training Tool</p>
                        <p className={`${className}_text`}>
                            A training tool I created to help practice the "roll-down" mechanic for the video game Teamfight Tactics. Includes scripts and documentation for quick and easy app updates for any future changes to the game.
                        </p>
                    </div>
                    <div className={`${className}_buttonContainer`}>
                        <a href="https://www.tftrolldown.com" target="_blank" rel='noreferrer' >
                            <button className={`${className}_button`}>Visit Website</button>
                        </a>
                        <a href="https://github.com/JamesDeChavez/tftrolldown" target="_blank" rel='noreferrer' >
                            <button className={`${className}_button`}>Github</button>
                        </a>  
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectsSection