import { useEffect, useRef } from 'react'

export const useInterval = (callback: () => void, delay: number) => {
    const savedCallback = useRef(() => {})

    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        const intervalFunction = () => {
            savedCallback.current()
        }
        let intervalId = setInterval(intervalFunction, delay)
        return () => clearInterval(intervalId)
    }, [delay])
}