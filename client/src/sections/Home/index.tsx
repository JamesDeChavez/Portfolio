import gsap, { Circ } from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import Pendulum from '../../components/Pendulum';
import Scramble from '../../components/Scramble';
import './styles.css'

const HomeSection = () => {
    const className = 'HomeSection'
    const root = useRef(null)
    const triangle = useRef(null)
    const timeline = useRef<gsap.core.Timeline>()

    const handleScrollClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log('scroll clicked')
    }

    useLayoutEffect(() => {
        const gsapContext = gsap.context (() => {
            timeline.current = gsap.timeline({repeat: -1})
                .to(triangle.current, {
                    duration: 0.5,
                    y: 20,
                    ease: Circ.easeIn,
                }, 'bounce1')
                .to(triangle.current, {
                    duration: 0.5,
                    y: 0,
                    ease: Circ.easeOut,
                }, 'bounce2')
        }, root)

        return () => gsapContext.revert()        
    }, [])

    return (
        <div className={className} ref={root} >
            <div className={`${className}_main`}>
                <Pendulum/>
                <Scramble/>
                <button className={`${className}_button`}>Contact Me</button>
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