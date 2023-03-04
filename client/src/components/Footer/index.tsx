import gsap, { Power1 } from 'gsap'
import { useLayoutEffect } from 'react'
import './styles.css'

const FooterSection = () => {

    useLayoutEffect(() => {
        const gsapContext = gsap.context(() => {
            gsap.from('.FooterSection_iconContainer', {
                x: '-10vw',
                scrollTrigger: {
                    trigger: '.FooterSection_iconContainer',
                    start: 'top bottom',
                    end: 'bottom bottom',
                    toggleActions: 'restart none none none',
                    scrub: 3
                }
            })
            gsap.from('.FooterSection_name', {
                x: '-10vw',
                scrollTrigger: {
                    trigger: '.FooterSection_name',
                    start: 'top bottom',
                    end: 'bottom bottom',
                    toggleActions: 'restart none none none',
                    scrub: 3
                }
            })
            gsap.from('.FooterSection_text', {
                x: '-10vw',
                scrollTrigger: {
                    trigger: '.FooterSection_text',
                    start: 'top bottom',
                    end: 'bottom bottom',
                    toggleActions: 'restart none none none',
                    scrub: 3
                }
            })

            return () => gsapContext.revert()
        })
    }, [])

    const handleNameClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        gsap.to(window, { scrollTo: ".HomeSection", duration: 1, ease: Power1.easeOut })
    }

    const className = 'FooterSection'
    return (
        <div className={className}>
            <div className={`${className}_iconContainer`}>
                <div>[ ]</div>
                <div>[ ]</div>
            </div>
            <div className={`${className}_nameContainer`}>
                <button className={`${className}_name`} onClick={handleNameClick}>James DeChavez</button>
            </div>
            <div className={`${className}_text`}>
                Consectetur esse veniam ea duis ex. Sint veniam reprehenderit laborum.
            </div>
        </div>
    )
}

export default FooterSection