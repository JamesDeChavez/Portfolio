import { Canvas, useFrame } from "@react-three/fiber"
import { Vector3 } from "three"
import Desk from "../../meshes/Desk"
import FirstName from "../../groups/FirstName"
import LastName from "../../groups/LastName"
import PendulumStand from "../../groups/PendulumStand"
import HiCube from "../../meshes/HiCube"
import ImCube from "../../meshes/ImCube"
import Marble from "../../meshes/Marble"
import { gsap } from "gsap"

const SetCamera = () => {    
    useFrame((state) => {
        gsap.to(state.camera.position, {duration: 3, x: 8, y: 1, z: 15})   
        state.camera.lookAt(2, 0, 0)
    })
    return <perspectiveCamera />
}

interface Props {
    root: React.RefObject<HTMLDivElement>
}

const PendulumScene: React.FC<Props> = ({ root }) => {
    return (
        <Canvas camera={{ position: [0, 4, 5] }}>
            <SetCamera />
            <directionalLight position={[0, 7, 5]} intensity={1} />
            <ambientLight intensity={0.3} />
            <Desk />
            <FirstName root={root} />
            <LastName root={root} />
            <PendulumStand />
            <HiCube />
            <ImCube />
            <Marble position={new Vector3(-15, 1, 0)} />
            <Marble position={new Vector3(15, 1, -5)} />
        </Canvas>
    )
}

export default PendulumScene