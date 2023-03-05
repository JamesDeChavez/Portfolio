import gsap, { Back, Circ, Power1 } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'
import Pendulum from '../../components/Pendulum'
import Scramble from '../../components/Scramble'
import { ReactComponent as SvgBackground1 } from '../../assets/polygon-scatter-haikei-mobile.svg'
import { ReactComponent as SvgBackground2 } from '../../assets/polygon-scatter-haikei.svg'
import './styles.css'

gsap.registerPlugin(ScrollTrigger)

const HomeSection = () => {
    const triangle = useRef(null)
    const root = useRef(null)
    
    const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        gsap.to(window, { scrollTo: ".ContactSection", duration: 1, ease: Power1.easeOut })
    }
    
    const handleScrollClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        gsap.to(window, { scrollTo: ".AboutSection", duration: 1, ease: Power1.easeOut })
    }
    
    useLayoutEffect(() => {
        const gsapContext = gsap.context (() => {

            //Animations on Render
            gsap.to(triangle.current, {
                duration: 0.5,
                y: 20,
                ease: Circ.easeIn,
                repeat: -1,
                yoyo: true
            })
            gsap.from('.Pendulum', { x: '-300vw', duration: 1, ease: Back.easeOut })
            gsap.set('.Pendulum', { clearProps: true })
            gsap.to(['.path1', '.path2', '.path3'], {
                rotate: 360,
                duration: 100,
                repeat: -1,
                transformOrigin: 'center'
            })

            //Scroll Animations - EXIT WINDOW
            gsap.to(['.path1', '.path2', '.path3'], {
                x: -100,
                y: -200,
                scrollTrigger: {
                    trigger: root.current,
                    start: 'top top',
                    end: 'bottom top',
                    toggleActions: 'restart none none none',
                    scrub: 3
                }
            })
            gsap.to('.HomeSection_main', {
                x: '50vw',
                scrollTrigger: {
                    trigger: root.current,
                    start: 'top top',
                    end: 'bottom top',
                    toggleActions: 'restart none none none',
                    scrub: 3
                }
            })
        }, root)
        
        return () => gsapContext.revert()        
    }, [])
    
    const className = 'HomeSection'
    return (
        <div className={className} ref={root} >
            <SvgBackground1 className={`${className}_background`} />
            <SvgBackground2 className={`${className}_backgroundWide`} />
            <div className={`${className}_main`}>
                <Pendulum/>
                <Scramble/>
                <button className={`${className}_button`} onClick={handleContactClick}>Contact Me</button>
            </div>
            <div className={`${className}_scrollContainer`}>
                <button className={`${className}_scrollButton`} onClick={handleScrollClick}>
                    <span className={`${className}_scrollText`}>Scroll</span>
                    <svg className={`${className}_scrollTriangle`} viewBox="0 0 100 50" ref={triangle}>
                        <polygon points='5,5 95,5 45,50'/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default HomeSection;