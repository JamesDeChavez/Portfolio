import gsap, { Power1 } from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import './styles.css';

const Pendulum = () => {
    const firstName = 'James';
    const lastName = 'DeChavez';
    const root = useRef(null)
    const timeline = useRef<gsap.core.Timeline>()
    
    useLayoutEffect(() => {
        const gsapContext = gsap.context(() => {
            timeline.current = gsap.timeline({ repeat: -1 })
                .to(`.${className}_first`, { duration: 0.5, rotate: 35, ease: Power1.easeOut })
                .to(`.${className}_first`, { duration: 0.5, rotate: 0, ease: Power1.easeIn })
                .to(`.${className}_last`, { duration: 0.5, rotate: -35, ease: Power1.easeOut })
                .to(`.${className}_last`, { duration: 0.5, rotate: 0, ease: Power1.easeIn })  
            return () => gsapContext.revert
        }, root)
    }, [])
    
    const className = 'Pendulum';
    return (
        <div className={className} ref={root}>
            <div className={`${className}_nameContainer`}>
                {Array.from(firstName).map((char, i) => {
                    let first = i === 0 ? `${className}_first` : ''
                    let last = i === firstName.length - 1 ? `${className}_last` : ''
                    return <span className={`${className}_letter ${first} ${last}`} key={`first-${i}`}>{char}</span>
                })}
            </div>
            <div className={`${className}_nameContainer`}>
                {Array.from(lastName).map((char, i) => {
                    let first = i === 0 ? `${className}_first` : ''
                    let last = i === lastName.length - 1 ? `${className}_last` : ''
                    return <span className={`${className}_letter ${first} ${last}`} key={`last-${i}`}>{char}</span>
                })}
            </div>
        </div>
    );
};

export default Pendulum;