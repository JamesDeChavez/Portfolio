import { Vector3 } from "three"
import Font from "../Font"

const ImCube = () => {
    return (
        <group position={[-3, 1, 3]} rotation={[0, Math.PI/3.5, 0]} >
            <Font text={"i'm"} position={new Vector3(0.1, -0.25, 1)} size={0.5} />
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

export default ImCube