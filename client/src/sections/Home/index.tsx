import Pendulum from '../../components/Pendulum';
import Scramble from '../../components/Scramble';
import './styles.css'

const HomeSection = () => {

    const className = 'HomeSection';
    return (
        <div className={className}>
            <div className={`${className}_main`}>
                <Pendulum/>
                <Scramble/>
                <button className={`${className}_button`}>Contact Me</button>
            </div>
            <div className={`${className}_scrollContainer`}>
                <p>Scroll</p>
                <svg className={`${className}_scrollTriangle`} viewBox="0 0 100 50">
                    <polygon points='5,5 95,5 45,50'/>
                </svg>
            </div>
        </div>
    );
};

export default HomeSection;