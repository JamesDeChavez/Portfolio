import { Canvas, useFrame } from "@react-three/fiber"
import Header3D from "../../groups/Header3D"
import { Vector3 } from "three"

const SetCamera: React.FC<{ lookAt?: Vector3 }> = ({ lookAt }) => {
    useFrame(state => state.camera.lookAt(lookAt ?? new Vector3(0, 0, 0)))
    return <perspectiveCamera />
}

interface Props {
    text: string,
    camPosition: Vector3,
    lookAt?: Vector3
}

const HeaderScene: React.FC<Props> = ({ text, camPosition, lookAt }) => {
    return (
        <Canvas camera={{ position: camPosition }} >
            <SetCamera lookAt={lookAt} />
            <ambientLight intensity={0.1} />
            <directionalLight position={[-1, 3, 3]} intensity={1} />
            <Header3D text={text} />
        </Canvas>
    )
}

export default HeaderScene