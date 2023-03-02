import { useState } from 'react'
import './styles.css'

const Navbar = () => {
    const [navVisible, setNavVisible] = useState(false)

    const handleHamburgerClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setNavVisible(prevState => !prevState)
    }

    const className = 'Navbar'
    return (
        <div className={className}>
            <div className={`${className}_topRow`} style={{backgroundColor: navVisible ? '#141e30' : 'transparent'}}>
                <button className={`${className}_hamburgerContainer`} onClick={handleHamburgerClick}>
                    <svg className={`${className}_hamburger`} viewBox="0 0 100 100">
                        <rect className={`${className}_topLine`}
                            width={60} height={5}
                            x={20} y={30}
                        />
                        <rect className={`${className}_midLine`}
                            width={60} height={5}
                            x={20} y={50}
                        />
                        <rect className={`${className}_botLine`}
                            width={60} height={5}
                            x={20} y={70}
                        />                        
                    </svg>
                </button>
                {navVisible ? 
                    <h2 className={`${className}_header`}>{`James DeChavez`}</h2> : <></>
                }
                
            </div>
            {navVisible ?
                <div className={`${className}_buttonsContainer`}>
                    <button className={`${className}_button`}>{`<Home/>`}</button>
                    <button className={`${className}_button`}>{`<About/>`}</button>
                    <button className={`${className}_button`}>{`<Projects/>`}</button>
                    <button className={`${className}_button`}>{`<Contact/>`}</button>
                </div>
            :
                <></>
            }
        
        
        
        
        </div>
    )
}

export default Navbar