


const PendulumStand = () => {
    
    return (
        <group>
            <mesh position={[2.5, 5, 0.15]}>
                <boxBufferGeometry args={[6, 0.1, 0.2]} />
                <meshStandardMaterial color={'#243B55'} />
            </mesh>

            <mesh position={[-0.4, 5, -0.1]}>
                <boxBufferGeometry args={[0.2, 0.1, 0.5]} />
                <meshStandardMaterial color={'#243B55'} />
            </mesh>
            <mesh position={[-0.4, 3.75, -0.3]}>
                <boxBufferGeometry args={[0.2, 2.5, 0.1]} />
                <meshStandardMaterial color={'#243B55'} />
            </mesh>
            
            <mesh position={[5.4, 5, -0.1]}>
                <boxBufferGeometry args={[0.2, 0.1, 0.5]} />
                <meshStandardMaterial color={'#243B55'} />
            </mesh>
            <mesh position={[5.4, 3.75, -0.3]}>
                <boxBufferGeometry args={[0.2, 2.5, 0.1]} />
                <meshStandardMaterial color={'#243B55'} />
            </mesh>

            <mesh position={[4, 2.5, 0.15]}>
                <boxBufferGeometry args={[9, 0.1, 1]} />
                <meshStandardMaterial color={'#243B55'} />
            </mesh>

            
            <mesh position={[-0.4, 1.3, -0.3]}>
                <boxBufferGeometry args={[0.2, 2.5, 0.1]} />
                <meshStandardMaterial color={'#243B55'} />
            </mesh>

            <mesh position={[8.4, 1.3, -0.3]}>
                <boxBufferGeometry args={[0.2, 2.5, 0.1]} />
                <meshStandardMaterial color={'#243B55'} />
            </mesh>
            
            <mesh position={[4, 0.05, 0.15]}>
                <boxBufferGeometry args={[9, 0.1, 1]} />
                <meshStandardMaterial color={'#243B55'} />
            </mesh>

        </group>
    )
}

export default PendulumStand