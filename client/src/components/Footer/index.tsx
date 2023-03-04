import gsap, { Power1 } from 'gsap'
import './styles.css'

const FooterSection = () => {

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