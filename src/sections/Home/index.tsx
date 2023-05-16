import gsap, { Circ, Power1 } from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import Scramble from '../../components/Scramble'
import PendulumScene from '../../three/components/PendulumScene'
import './styles.css'

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
        }, root)        
        return () => gsapContext.revert()        
    }, [])
    
    const className = 'HomeSection'
    return (
        <div className={className} ref={root} >
            <div className={`${className}_sceneContainer`}>
                <PendulumScene root={root} />
            </div>
            <div className={`${className}_main`}>
                <Scramble/>
                <button className={`${className}_button`} onClick={handleContactClick}>Contact Me</button>
            </div>
            <div className={`${className}_scrollContainer`}>
                <button className={`${className}_scrollButton`} onClick={handleScrollClick} >
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