import { Euler, Vector3 } from "three"
import FirstLetter from "../FirstLetter"
import PendulumLetter from "../PendulumLetter"
import PendulumString from "../../meshes/PendulumString"
import LastLetter from "../LastLetter"

interface Props {
    root: React.RefObject<HTMLDivElement>
}

const FirstName: React.FC<Props> = ({ root }) => {
    const firstOffset = new Vector3(0.5, 5, 0.15)
    const lastOffset = new Vector3(4.5, 5, 0.15)
    return (
        <group>
            <FirstLetter
                letter={'j'} 
                letterPosition={new Vector3(0, 3, 0)}
                stringPosition={new Vector3(0.5, 4.5, 0.15)}
                stringLength={1.1}
                root={root}
                offset={firstOffset}
            />
            <PendulumLetter
                letter={'a'} 
                letterPosition={new Vector3(1, 3, 0)}
                stringPosition={new Vector3(1.5, 4.5, 0.15)}
                stringLength={1.1}
            />
            <PendulumLetter
                letter={'m'} 
                letterPosition={new Vector3(2, 3, 0)}
                stringPosition={new Vector3(2.5, 4.5, 0.15)}
                stringLength={1.1}
            />
            <PendulumString position={new Vector3(2.5, 3.95, 0.15)} length={0.7} rotation={new Euler(0, 0, Math.PI/2)} />
            <PendulumLetter
                letter={'e'} 
                letterPosition={new Vector3(3, 3, 0)}
                stringPosition={new Vector3(3.5, 4.5, 0.15)}
                stringLength={1.1}
            />
            <LastLetter 
                letter={'s'} 
                letterPosition={new Vector3(4, 3, 0)}
                stringPosition={new Vector3(4.5, 4.5, 0.15)}
                stringLength={1.1}
                root={root}
                offset={lastOffset}
            />
        </group>
    )
}

export default FirstName