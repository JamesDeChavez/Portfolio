import { Euler, Vector3 } from "three"

interface Props {
    position: Vector3,
    length: number,
    rotation?: Euler
}

const PendulumString: React.FC<Props> = ({ position, length, rotation }) => {
    return (
        <mesh position={position} rotation={rotation ?? [0, 0, 0]} >
            <cylinderBufferGeometry args={[0.005, 0.005, length]} />
            <meshStandardMaterial color={'black'} />
        </mesh>
    )
}

export default PendulumString