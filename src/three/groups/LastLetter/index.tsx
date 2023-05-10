import { useLayoutEffect, useRef } from 'react'
import { Group, Vector3 } from "three"
import PendulumLetter from "../PendulumLetter"
import { Power1, gsap } from 'gsap'

interface Props {
    letter: string,
    letterPosition: Vector3,
    stringPosition: Vector3,
    stringLength: number,
    root: React.RefObject<HTMLDivElement>,
    offset: Vector3
}

const LastLetter: React.FC<Props> = ({root, offset, ...props}) => {
    const lastGroupRef = useRef<Group>(null)
    const lastLetterRef = useRef<Group>(null)
    const timeline = useRef<gsap.core.Timeline>()

    useLayoutEffect(() => {
        if(!lastGroupRef.current || !lastLetterRef.current) return
        const gsapContext = gsap.context(() => {
            gsap.set(lastGroupRef.current!.position, {x: offset.x, y: offset.y, z: offset.z})
            gsap.set(lastLetterRef.current!.position, {x: -offset.x, y: -offset.y, z: -offset.z})

            timeline.current = gsap.timeline({ repeat: -1, delay: 1 })
                .to(lastGroupRef.current!.rotation, { duration: 0.5, z: Math.PI / 4, ease: Power1.easeOut, delay: 1 })
                .to(lastGroupRef.current!.rotation, { duration: 0.5, z: 0, ease: Power1.easeIn })

            return () => gsapContext.revert()
        }, root)
    }, [])

    return (
        <group ref={lastGroupRef} >
            <PendulumLetter {...props} letterRef={lastLetterRef} /> 
        </group>
    )
}

export default LastLetter