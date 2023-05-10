import { useTexture } from "@react-three/drei"
import marbleTexture from '../../../assets/metalTexture.jpg'
import { Mesh, Vector3 } from "three"
import { Bounce, Circ, gsap } from "gsap"
import { useRef } from "react"

interface Props {
    position: Vector3
}

const Marble: React.FC<Props> = ({ position }) => {
    const marbleRef = useRef<Mesh>(null)
    const texture = useTexture({ map: marbleTexture })

    const handleClick = () => {
        gsap.timeline()
            .to(marbleRef.current!.position, { duration: 0.3, y: marbleRef.current!.position.y + 1, ease: Circ.easeOut})
            .to(marbleRef.current!.position, { duration: 0.3, y: 1, ease: Bounce.easeOut})
    }

    return (
        <mesh position={position} onPointerDown={handleClick} ref={marbleRef} >
            <sphereBufferGeometry args={[1, 16, 16]} />
            <meshStandardMaterial map={texture.map} color={'#00C6BD'} />
        </mesh>
    )
}

export default Marble