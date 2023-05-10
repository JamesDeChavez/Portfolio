import { Group, Vector3 } from "three"
import Font from "../../meshes/Font"
import { useRef } from "react"
import { gsap } from "gsap"
import { useFrame } from "@react-three/fiber"

interface Props {
    text: string
}

const Header3D: React.FC<Props> = ({ text }) => {
    const groupRef = useRef<Group>(null)
    const leftRef = useRef<Group>(null)
    const rightRef = useRef<Group>(null)
    const { length } = text
    const left = -(length/2) - 1
    const right = length/2

    useFrame(() => {
        gsap.to(groupRef.current!.position, { duration: 1, x: 0, y: 0, z: 0})
    })

    const handleEnter = () => {
        gsap.to(leftRef.current!.position, {x: leftRef.current!.position.x - 0.5})
        gsap.to(rightRef.current!.position, {x: leftRef.current!.position.x + 0.5})
    }

    const handleExit = () => {
        gsap.to(leftRef.current!.position, {x: 0})
        gsap.to(rightRef.current!.position, {x: 0})
    }

    return (
        <group 
            position={[-5, 0, 0]}
            onPointerEnter={handleEnter} 
            onPointerOut={handleExit}
            ref={groupRef} 
        >
            <mesh position={[0.5, 0.5, 0]} >
                <boxBufferGeometry args={[length + 4, 1.2, 0.1]} />
                <meshStandardMaterial visible={false} />
            </mesh>
            
            <group ref={leftRef}>
                <Font text={'<'} position={new Vector3(left, 0, 0)} color='#00C6BD' height={0.1} />
            </group>
            <Font text={text} position={new Vector3(left + 1, 0, 0)} height={0.1} />
            <group ref={rightRef}>
                <Font text={'/>'} position={new Vector3(right, 0, 0)} color='#00C6BD' height={0.1} />
            </group>        
        </group>
    )
}

export default Header3D