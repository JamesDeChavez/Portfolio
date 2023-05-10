import { useTexture } from '@react-three/drei'
import deskTexture from '../../../assets/desk.jpg'

const Desk = () => {
    const texture = useTexture({ map: deskTexture })
    return (
        <mesh>
            <boxBufferGeometry args={[50,0.1,30]}  />
            <meshLambertMaterial map={texture.map} color={'#141E30'} />
        </mesh>
    )
}

export default Desk