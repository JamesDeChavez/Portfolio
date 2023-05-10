import { Vector3 } from 'three'
import { Text3D } from '@react-three/drei'

interface Props {
    text: string,
    position: Vector3,
    size?: number,
    color?: string
}

const Font: React.FC<Props> = ({text, position, size, color}) => {
    return (
        <mesh position={position} >
            <Text3D 
                font={'/Major Mono Display_Regular.json'}
                size={size ?? 1}
                height={0.3}
            >
                {text}
                <meshStandardMaterial color={color ?? '#FFFFFF'} />
            </Text3D>
        </mesh>
    )
}

export default Font