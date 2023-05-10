import { Group, Vector3 } from "three"
import Font from "../../meshes/Font"
import PendulumString from "../../meshes/PendulumString"

interface Props {
    letter: string,
    letterPosition: Vector3,
    stringPosition: Vector3,
    stringLength: number,
    letterRef?: React.RefObject<Group>
}

const PendulumLetter: React.FC<Props> = ({ letter, letterPosition, stringPosition, stringLength, letterRef}) => {

    return (
        <group ref={letterRef} >
            <Font text={letter} position={letterPosition} />
            <PendulumString position={stringPosition} length={stringLength} />
        </group>
    )
}

export default PendulumLetter