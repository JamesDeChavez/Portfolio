import { useState, useRef, useLayoutEffect } from 'react'
import gsap, { Power1 } from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import './styles.css'

gsap.registerPlugin(ScrollToPlugin)

const Navbar = () => {    
    const [navVisible, setNavVisible] = useState(false)
    const lineOne = useRef(null)
    const lineTwo = useRef(null)
    const lineThree = useRef(null)
    const topRow = useRef(null)
    const navOne = useRef(null)
    const navTwo = useRef(null)
    const navThree = useRef(null)
    const navFour = useRef(null)
    const root = useRef(null)
    const delay = useRef(0.2)
    const hoverTimeline = useRef<gsap.core.Timeline>()
    const clickTimeline = useRef<gsap.core.Timeline>()
    const navTimeline = useRef<gsap.core.Timeline>()
    
    useLayoutEffect(() => {
        delay.current = !navVisible ? 0.2 : 0
        
        let gsapContext = gsap.context(() => {
            //Yoyo hover animation
            hoverTimeline.current = gsap.timeline({ repeat: -1, paused: true })
                .to(lineOne.current, { duration: 0.6, scaleX: 0.5 }, 'shrink')
                .to(lineTwo.current, { duration: 0.6, scaleX: 0.5, delay: delay.current }, 'shrink')
                .to(lineThree.current, { duration: 0.6, scaleX: 0.5, delay: 2*delay.current }, 'shrink')
                .to(lineOne.current, { duration: 0.6, scaleX: 1, delay: -2*delay.current }, 'grow')
                .to(lineTwo.current, { duration: 0.6, scaleX: 1, delay: -delay.current }, 'grow')
                .to(lineThree.current, { duration: 0.6, scaleX: 1, delay: 0 }, 'grow')

        }, root)
        
        return () => gsapContext.revert()
    }, [navVisible])
    
    useLayoutEffect(() => {        
        let gsapContext = gsap.context(() => {
            //Burger click animation
            clickTimeline.current = gsap.timeline({ paused: true })
                .set('.Navbar_line', { scaleX: 1 })
                .to(lineOne.current, { duration: .2, y: 20 }, 'combine')
                .to(lineThree.current, {  duration: .2, y: -20 }, 'combine')
                .set('.Navbar_line', { transformOrigin: 'center' })
                .to(lineOne.current, { duration: 0.2, rotate: 45}, 'rotate')
                .to(lineTwo.current, { duration: 0.2, rotate: -45}, 'rotate')
                .to(lineThree.current, { duration: 0.2, rotate: -45}, 'rotate')
            
            //Sliding navLinks animation
            navTimeline.current = gsap.timeline({ paused: true })
                .from(topRow.current, { duration: 0.2, x: -2000 }, 'slideIn')
                .from(navOne.current, { duration: 0.2, x: -2000, delay: 0.1 }, 'slideIn')
                .from(navTwo.current, { duration: 0.2, x: -2000, delay: 0.2 }, 'slideIn')
                .from(navThree.current, { duration: 0.2, x: -2000, delay: 0.3 }, 'slideIn')
                .from(navFour.current, { duration: 0.2, x: -2000, delay: 0.4 }, 'slideIn')

        }, root)

        return () => gsapContext.revert()
    }, [])
            
    const handleHamburgerMouseEnter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        hoverTimeline.current?.repeat(-1)
        hoverTimeline.current?.restart()
    }

    const handleHamburgerMouseLeave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (!hoverTimeline.current) return
        
        let repeats = Math.floor(hoverTimeline.current.totalTime() / hoverTimeline.current.duration())
        hoverTimeline.current.repeat(repeats)
    }    
    
    const handleHamburgerClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (!navVisible && clickTimeline.current && navTimeline.current) {
            clickTimeline.current.play()
            gsap.set('.Navbar_buttonsContainer', { display: 'grid'})
            gsap.set('.Navbar_topRow', { display: 'grid' })
            navTimeline.current.play()
        } 
        else if (clickTimeline.current && navTimeline.current) {
            clickTimeline.current.reverse()
            navTimeline.current.reverse().then(() => {
                gsap.set('.Navbar_buttonsContainer', { display: 'none'})
                gsap.set('.Navbar_topRow', { display: 'none' })
            })
        }
        setNavVisible(prevState => !prevState)
    }

    const handleNavClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, n: number) => {
        e.preventDefault()
        if (navTimeline.current && clickTimeline.current) {
            clickTimeline.current.reverse()
            navTimeline.current.reverse().then(() => {
                gsap.set('.Navbar_buttonsContainer', { display: 'none'})
                gsap.set('.Navbar_topRow', { display: 'none' })
            })
        }
        setNavVisible(prevState => !prevState)

        switch(n) {
            case 0:
                gsap.to(window, { scrollTo: ".HomeSection", duration: 1, ease: Power1.easeOut })
                break;
            case 1:
                gsap.to(window, { scrollTo: ".AboutSection", duration: 1, ease: Power1.easeOut })
                break;
            case 2:
                gsap.to(window, { scrollTo: ".ProjectsSection", duration: 1, ease: Power1.easeOut })
                break;
            case 3:
                gsap.to(window, { scrollTo: ".ContactSection", duration: 1, ease: Power1.easeOut })
                break;
            default: break;
        }       
    }
        
    const className = 'Navbar'
    return (
        <div className={className} ref={root}>
            <button 
                className={`${className}_hamburgerContainer`} 
                onClick={handleHamburgerClick}
                onMouseEnter={handleHamburgerMouseEnter}
                onMouseLeave={handleHamburgerMouseLeave}
            >
                <svg className={`${className}_hamburger`} viewBox="0 0 100 100">
                    <rect className={`${className}_topLine ${className}_line`}
                        width={60} height={5}
                        x={20} y={30}
                        ref={lineOne}
                    />
                    <rect className={`${className}_midLine ${className}_line`}
                        width={60} height={5}
                        x={20} y={50}
                        ref={lineTwo}
                    />
                    <rect className={`${className}_botLine ${className}_line`}
                        width={60} height={5}
                        x={20} y={70}
                        ref={lineThree}
                    />                        
                </svg>
            </button>
            <div className={`${className}_topRow`} ref={topRow}>
                <h2 className={`${className}_header`}>{`James DeChavez`}</h2>                
            </div>
            <div className={`${className}_buttonsContainer`}>
                <button className={`${className}_button`} onClick={(e) => handleNavClick(e, 0)} ref={navOne}>
                    <span>{`<`}</span>{`Home`}<span>{`/>`}</span>
                </button>
                <button className={`${className}_button`} onClick={(e) => handleNavClick(e, 1)} ref={navTwo}>
                    <span>{`<`}</span>{`About`}<span>{`/>`}</span>
                </button>
                <button className={`${className}_button`} onClick={(e) => handleNavClick(e, 2)} ref={navThree}>
                    <span>{`<`}</span>{`Projects`}<span>{`/>`}</span>
                </button>
                <button className={`${className}_button`} onClick={(e) => handleNavClick(e, 3)} ref={navFour}>
                    <span>{`<`}</span>{`Contact`}<span>{`/>`}</span>
                </button>
            </div>       
        </div>
    )
}

export default Navbar