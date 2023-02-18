import { useEffect, useState } from 'react';
import './styles.css';

const City = () => {
    const [x_position, set_X_position] = useState(window.innerWidth/2);
    const [y_position, set_Y_position] = useState(window.innerHeight/2);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [backgroundPosition, setBackgroundPosition] = useState('50% 50%');

    //Track Mouse Movement
    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            set_X_position(e.x);
            set_Y_position(e.y);
        });
        return () => {
            window.removeEventListener('mousemove', (e) => {
                set_X_position(e.x);
                set_Y_position(e.y);
            });
        };
    }, []);

    //Track Window Size
    useEffect(() => {
        window.addEventListener('resize', (e) => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        });
        return () => {
            window.removeEventListener('resize', (e) => {
                setWindowWidth(window.innerWidth);
                setWindowHeight(window.innerHeight);
            });
        }
    }, []);

    //Font Background Animation
    useEffect(() => {
        let horizontalPosition = x_position / windowWidth * 20 + 40;
        let verticalPosition = y_position / windowHeight * 20 + 40;
        setBackgroundPosition(`${horizontalPosition}% ${verticalPosition}%`);
    }, [x_position, y_position, windowHeight, windowWidth])

    const className = 'City';
    return (
        <div className={className}>
            <h1 className={`${className}_name`} style={{backgroundPosition: backgroundPosition}}>
                JAMES <br />
                DECHAVEZ 
            </h1>
        </div>
    );
};

export default City;