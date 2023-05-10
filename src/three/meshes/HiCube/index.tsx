import { Vector3 } from "three"
import Font from "../Font"

const HiCube = () => {
    return (
        <group position={[-3, 3, 2.5]} rotation={[0, Math.PI/4.5, 0]} >
            <Font text={"hi!"} position={new Vector3(0.25, -0.25, 1)} size={0.5} />
            <mesh>
                <boxBufferGeometry args={[0.2, 2, 0.2]} />
                <meshStandardMaterial color={'#243B55'} />
            </mesh>
            <mesh position={[1.8, 0, 0]}>
                <boxBufferGeometry args={[0.2, 2, 0.2]} />
                <meshStandardMaterial color={'#243B55'} />
            </mesh>
            <mesh position={[1.8, 0, 1.8]}>
                <boxBufferGeometry args={[0.2, 2, 0.2]} />
                <meshStandardMaterial color={'#243B55'} />
            </mesh>
            <mesh position={[0, 0, 1.8]}>
                <boxBufferGeometry args={[0.2, 2, 0.2]} />
                <meshStandardMaterial color={'#243B55'} />
            </mesh>
            <mesh position={[.9, -.9, 0]} >
                <boxBufferGeometry args={[2, 0.2, 0.2]} />
                <meshStandardMaterial color={'#243B55'} />
            </mesh>
            <mesh position={[.9, .9, 0]} >
                <boxBufferGeometry args={[2, 0.2, 0.2]} />
                <meshStandardMaterial color={'#243B55'} />
            </mesh>
            <mesh position={[.9, -.9, 1.8]} >
                <boxBufferGeometry args={[2, 0.2, 0.2]} />
                <meshStandardMaterial color={'#243B55'} />
            </mesh>
            <mesh position={[.9, .9, 1.8]} >
                <boxBufferGeometry args={[2, 0.2, 0.2]} />
                <meshStandardMaterial color={'#243B55'} />
            </mesh>
            <mesh position={[0, 0.9, 0.9]} >
                <boxBufferGeometry args={[0.2, 0.2, 2]} />
                <meshStandardMaterial color={'#243B55'} />
            </mesh>
            <mesh position={[0, -0.9, 0.9]} >
                <boxBufferGeometry args={[0.2, 0.2, 2]} />
                <meshStandardMaterial color={'#243B55'} />
            </mesh>
            <mesh position={[1.8, 0.9, 0.9]} >
                <boxBufferGeometry args={[0.2, 0.2, 2]} />
                <meshStandardMaterial color={'#243B55'} />
            </mesh>
            <mesh position={[1.8, -0.9, 0.9]} >
                <boxBufferGeometry args={[0.2, 0.2, 2]} />
                <meshStandardMaterial color={'#243B55'} />
            </mesh>
        </group>
    )
}

export default HiCube