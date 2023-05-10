import { Canvas, useFrame } from "@react-three/fiber"
import Header3D from "../../groups/Header3D"
import { Vector3 } from "three"
import { Power1, gsap } from "gsap"

const SetCamera: React.FC<{ lookAt?: Vector3 }> = ({ lookAt }) => {
    useFrame(state => state.camera.lookAt(lookAt ?? new Vector3(0, 0, 0)))
    return <perspectiveCamera />
}

interface Props {
    text: string,
    camPosition: Vector3,
    lookAt?: Vector3
    scrollTo: string
}

const HeaderScene: React.FC<Props> = ({ text, camPosition, lookAt, scrollTo }) => {
    
    const handleClick = () => {
        gsap.to(window, { scrollTo: scrollTo, duration: .5, ease: Power1.easeOut })
    }

    return (
        <Canvas camera={{ position: camPosition }} onClick={handleClick} >
            <SetCamera lookAt={lookAt} />
            <ambientLight intensity={0.1} />
            <directionalLight position={[-1, 3, 3]} intensity={1} />
            <Header3D text={text} />
        </Canvas>
    )
}

export default HeaderScene