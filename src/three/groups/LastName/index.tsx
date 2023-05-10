import { Euler, Vector3 } from "three"
import FirstLetter from "../FirstLetter"
import PendulumLetter from "../PendulumLetter"
import LastLetter from "../LastLetter"
import PendulumString from "../../meshes/PendulumString"

interface Props {
    root: React.RefObject<HTMLDivElement>
}

const LastName: React.FC<Props> = ({ root }) => {
    const firstOffset = new Vector3(0.5, 2.5, 0.15)
    const lastOffset = new Vector3(7.5, 2.5, 0.15)
    return (
        <group>
            <FirstLetter
                letter={'d'} 
                letterPosition={new Vector3(0, 0.5, 0)}
                stringPosition={new Vector3(0.5, 2, 0.15)}
                stringLength={1.1}
                root={root}
                offset={firstOffset}
            />
            <PendulumLetter
                letter={'e'} 
                letterPosition={new Vector3(1, 0.5, 0)}
                stringPosition={new Vector3(1.5, 2, 0.15)}
                stringLength={1.1}
            />
            <PendulumLetter
                letter={'c'} 
                letterPosition={new Vector3(2, 0.5, 0)}
                stringPosition={new Vector3(2.5, 2, 0.15)}
                stringLength={1.1}
            />
            <PendulumLetter
                letter={'h'} 
                letterPosition={new Vector3(3, 0.5, 0)}
                stringPosition={new Vector3(3.5, 2, 0.15)}
                stringLength={1.1}
            />            
            <PendulumString position={new Vector3(3.5, 1.45, 0.15)} length={0.7} rotation={new Euler(0, 0, Math.PI/2)} />
            <PendulumLetter
                letter={'a'} 
                letterPosition={new Vector3(4, 0.5, 0)}
                stringPosition={new Vector3(4.5, 2, 0.15)}
                stringLength={1.1}
            />
            <PendulumLetter
                letter={'v'} 
                letterPosition={new Vector3(5, 0.5, 0)}
                stringPosition={new Vector3(5.5, 2, 0.15)}
                stringLength={1.1}
            />            
            <PendulumString position={new Vector3(5.5, 1.45, 0.15)} length={0.7} rotation={new Euler(0, 0, Math.PI/2)} />
            <PendulumLetter
                letter={'e'} 
                letterPosition={new Vector3(6, 0.5, 0)}
                stringPosition={new Vector3(6.5, 2, 0.15)}
                stringLength={1.1}
            />
            <LastLetter 
                letter={'z'} 
                letterPosition={new Vector3(7, 0.5, 0)}
                stringPosition={new Vector3(7.5, 2, 0.15)}
                stringLength={1.1}
                root={root}
                offset={lastOffset}
            />
        </group>
    )
}

export default LastName