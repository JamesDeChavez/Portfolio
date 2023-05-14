import { useState, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ReactComponent as SvgBackground } from '../../assets/polygon-scatter-haikei-mobile2.svg'
import HeaderScene from '../../three/components/HeaderScene'
import { Vector3 } from 'three'
import { sprImages, bsdImages, tftImages } from './ProjectData'
import './styles.css'

const ProjectsSection = () => {
    
    const [sprIndex, setSprIndex] = useState(0)
    const [bsdIndex, setBsdIndex] = useState(0)
    const [tftIndex, setTftIndex] = useState(0)

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
            gsap.fromTo('.ProjectsSection_header', { x: '-10vw'}, {
                x: 0,
                scrollTrigger: {
                    trigger: '.ProjectsSection_header',
                    start: 'top bottom',
                    end: 'bottom top',
                    toggleActions: 'restart none none none'
                }
            })
            gsap.fromTo('.ProjectsSection_headerWide', { x: '-10vw'}, {
                x: 0,
                scrollTrigger: {
                    trigger: '.ProjectsSection_header',
                    start: 'top bottom',
                    end: 'bottom top',
                    toggleActions: 'restart none none none'
                }
            })

            gsap.fromTo('.ProjectsSection_freeTier', { x: '10vw' }, {
                x: 0,
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
                        toggleActions: 'restart none none reset'
                    }
                })
            })

            const textSections = gsap.utils.toArray('.ProjectsSection_textSection')
            textSections.forEach((section: any) => {
                gsap.fromTo(section, { x: '10vw' }, {
                    x: 0,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top bottom',
                        end: 'bottom 90%',
                        toggleActions: 'restart none none none'
                    }
                })
            })

            const projectButtons = gsap.utils.toArray('.ProjectsSection_button')
            projectButtons.forEach((button: any) => {
                gsap.fromTo(button, { opacity: 0 }, {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: button,
                        start: 'top bottom',
                        end: 'bottom 90%',
                        toggleActions: 'restart none none none'
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
                    toggleActions: 'restart none none none'
                }
            })            
            return () => gsapContext.revert()
        })
    }, [])

    const handleImageButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, project: string, direction: string) => {
        e.preventDefault()
        switch (project) {
            case 'SPR':
                if (direction === 'PREV') {
                    setSprIndex(prevState => prevState > 0 ? prevState - 1 : sprImages.length - 1)
                    gsap.fromTo(`.${className}_sprImage`, { x: '-100%'}, { duration: 0.5, x: 0 })
                }
                if (direction === 'NEXT') {
                    setSprIndex(prevState => (prevState + 1) % sprImages.length)
                    gsap.fromTo(`.${className}_sprImage`, { x: '100%' }, { duration: 0.5, x: 0})
                }
                break;
            case 'BSD':
                if (direction === 'PREV') {
                    setBsdIndex(prevState => prevState > 0 ? prevState - 1 : bsdImages.length - 1)
                    gsap.fromTo(`.${className}_bsdImage`, { x: '-100%'}, { duration: 0.5, x: 0 })
                }
                if (direction === 'NEXT') {
                    setBsdIndex(prevState => (prevState + 1) % bsdImages.length)
                    gsap.fromTo(`.${className}_bsdImage`, { x: '100%' }, { duration: 0.5, x: 0})
                }             
                break;
            case 'TFT':
                if (direction === 'PREV') {
                    setTftIndex(prevState => prevState > 0 ? prevState - 1 : tftImages.length - 1)
                    gsap.fromTo(`.${className}_tftImage`, { x: '-100%'}, { duration: 0.5, x: 0 })
                }
                if (direction === 'NEXT') {
                    setTftIndex(prevState => (prevState + 1) % tftImages.length)
                    gsap.fromTo(`.${className}_tftImage`, { x: '100%' }, { duration: 0.5, x: 0})
                }
                break;        
            default:
                break;
        }
    }

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
                    <p className={`${className}_projectName`}>
                        singlepagerecipes.com
                    </p>
                    <img className={`${className}_projectImage ${className}_sprImage`} src={sprImages[sprIndex].image} alt="webpage" />
                    <div className={`${className}_imageButtonsContainer`} >
                        <button className={`${className}_imageButton`} onClick={(e) => handleImageButtonClick(e, 'SPR', 'PREV')} >{'<'}</button>
                        <p className={`${className}_imageText`}>{`${sprImages[sprIndex].desc} (${sprIndex + 1}/${sprImages.length})`}</p>
                        <button className={`${className}_imageButton`} onClick={(e) => handleImageButtonClick(e, 'SPR', 'NEXT')} >{'>'}</button>
                    </div>
                    <div className={`${className}_imageOverlay`}></div>
                </div>
                <div className={`${className}_descriptionContainer`}>
                    <div className={`${className}_textSection`}>
                        <div className={`${className}_textContainer`}>
                            <p className={`${className}_text`}>
                                <span className={`${className}_sectionLabel`} >Purpose:</span> Simplify the process of learning new recipes from Youtube and ordering recipe ingredients from Amazon Fresh.
                            </p>
                        </div>
                        <div className={`${className}_textContainer`}>
                            <p className={`${className}_text`}>
                                <span className={`${className}_sectionLabel`} >Key Features:</span>
                            </p>
                            <ul className={`${className}_list`}>
                                <li className={`${className}_text`}>Youtube API connection to help users find new recipes</li>
                                <li className={`${className}_text`}>Amazon Fresh API connection to automate ingredient ordering</li>
                                <li className={`${className}_text`}>Single-page UI ensures all recipe info is readily available on all screen sizes</li>
                            </ul>
                        </div>
                        <div className={`${className}_textContainer`}>
                            <p className={`${className}_text`}>
                                <span className={`${className}_sectionLabel`} >Main Tech:</span> React, Typescript, Apollo GraphQL, MongoDB, Node.js, Express
                            </p>
                        </div>
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
                    <p className={`${className}_projectName`}>
                        bsdrank.com
                    </p>
                    <img className={`${className}_projectImage ${className}_bsdImage`} src={bsdImages[bsdIndex].image} alt="webpage" />
                    <div className={`${className}_imageButtonsContainer`} >
                        <button className={`${className}_imageButton`} onClick={(e) => handleImageButtonClick(e, 'BSD', 'PREV')} >{'<'}</button>
                        <p className={`${className}_imageText`}>{`${bsdImages[bsdIndex].desc} (${bsdIndex + 1}/${bsdImages.length})`}</p>
                        <button className={`${className}_imageButton`} onClick={(e) => handleImageButtonClick(e, 'BSD', 'NEXT')} >{'>'}</button>
                    </div>
                    <div className={`${className}_imageOverlay`}></div>
                </div>
                <div className={`${className}_descriptionContainer`}>
                    <div className={`${className}_textSection`} >
                        <div className={`${className}_textContainer`}>
                            <p className={`${className}_text`}>
                                <span className={`${className}_sectionLabel`} >Purpose:</span> Provide users with data-driven motivation to get stronger by tracking their workouts and letting them earn ranks based on their best lifts
                            </p>
                        </div>
                        <div className={`${className}_textContainer`}>
                            <p className={`${className}_text`}>
                                <span className={`${className}_sectionLabel`} >Key Features:</span>
                            </p>
                            <ul className={`${className}_list`}>
                                <li className={`${className}_text`}>Ranking system created from analysis performed on database of over 1.6 milliion individuals</li>
                                <li className={`${className}_text`}>Rank algorithm utilizes industry standard metrics to calculate the user's strength while normalizing for sex, bodyweight, and rep ranges</li>
                                <li className={`${className}_text`}>Simple workout tracking interface provides users with a view of their past lifts and their strength gains over time</li>
                            </ul>
                        </div>
                        <div className={`${className}_textContainer`}>
                            <p className={`${className}_text`}>
                                <span className={`${className}_sectionLabel`} >Main Tech:</span> React, Typescript, Apollo GraphQL, MongoDB, Node.js, Express
                            </p>
                        </div>
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
                    <p className={`${className}_projectName`}>
                        tftrolldown.com
                    </p>
                    <img className={`${className}_projectImage ${className}_tftImage`} src={tftImages[tftIndex].image} alt="webpage" />
                    <div className={`${className}_imageButtonsContainer`} >
                        <button className={`${className}_imageButton`} onClick={(e) => handleImageButtonClick(e, 'TFT', 'PREV')} >{'<'}</button>
                        <p className={`${className}_imageText`}>{`${tftImages[tftIndex].desc} (${tftIndex + 1}/${tftImages.length})`}</p>
                        <button className={`${className}_imageButton`} onClick={(e) => handleImageButtonClick(e, 'TFT', 'NEXT')} >{'>'}</button>
                    </div>
                    <div className={`${className}_imageOverlay`}></div>
                </div>
                <div className={`${className}_descriptionContainer`}>
                    <div className={`${className}_textSection`}>
                        <div className={`${className}_textContainer`}>
                            <p className={`${className}_text`}>
                                <span className={`${className}_sectionLabel`} >Purpose:</span> A training tool to help players practice the "roll-down" mechanic for the video game Teamfight Tactics.
                            </p>
                        </div>
                        <div className={`${className}_textContainer`}>
                            <p className={`${className}_text`}>
                                <span className={`${className}_sectionLabel`} >Key Features:</span>
                            </p>
                            <ul className={`${className}_list`}>
                                <li className={`${className}_text`}>Utilizes Riot Games API and free use assets to mimic a real game play experience from within the training tool</li>
                                <li className={`${className}_text`}>Cutomizeable game options to allow users to simulate any specific scenarios they choose</li>
                                <li className={`${className}_text`}>Includes scripts and documentation for quick and easy app updates for any future changes to the game</li>
                            </ul>
                        </div>
                        <div className={`${className}_textContainer`}>
                            <p className={`${className}_text`}>
                                <span className={`${className}_sectionLabel`} >Main Tech:</span> React, Typescript
                            </p>
                        </div>
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