import { useState } from "react";
import City from "../../components/City";
import Folded from "../../components/Folded";
import Glowing from "../../components/Glowing";
import Hovering from "../../components/Hovering";
import Ocean from "../../components/Ocean";
import Pendulum from "../../components/Pendulum";
import Scramble from "../../components/Scramble";

const JumbotronBranch = () => {
    const RENDERS = ['PENDULUM', 'OCEAN', 'SCRAMBLE', 'HOVERING', 'FOLDED','GLOWING', 'CITY'];
    const [render, setRender] = useState('HOVERING')

    const nextStyle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setRender(prevState => prevState === RENDERS[RENDERS.length - 1] ? RENDERS[0] : RENDERS[RENDERS.indexOf(prevState) + 1] )
    };

    return (
        <div>
            <div style={{position: 'relative', zIndex: 99}}>
                <button 
                    className="NextStyleButton" 
                    style={{position: 'absolute'}}
                    onClick={nextStyle}
                >Next Style</button>
            </div>
            {{
                [RENDERS[0]]: <Pendulum/>,
                [RENDERS[1]]: <Ocean/>,
                [RENDERS[2]]: <Scramble/>,
                [RENDERS[3]]: <Hovering/>,
                [RENDERS[4]]: <Folded/>,
                [RENDERS[5]]: <Glowing/>,
                [RENDERS[6]]: <City/>
            }[render]}
        </div>
    );
};

export default JumbotronBranch;