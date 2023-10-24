import { useState, useRef, useEffect } from 'react'

interface CountdownProps {
    initValue: number
    endHandler: () => void
}

interface CountdownResult {
    time: number
    startCount: () => void
}

const useCountdown = ({ initValue, endHandler }: CountdownProps): CountdownResult => {
    if (typeof initValue !== 'number') {
        throw new TypeError('initValue must be a number')
    }

    const timerRef = useRef<number | null>(null)
    const [time, setTime] = useState<number>(initValue)

    const startCount = () => {
        if (timerRef.current === null) {
            timerRef.current = setInterval(() => {
                setTime(t => {
                    if (t <= 1) {
                        clearInterval(timerRef.current!)
                        endHandler()
                    }
                    return t - 1
                })
            }, 1000)
        }
    }

    useEffect(() => {
        return () => {
            if (timerRef.current !== null) {
                clearInterval(timerRef.current)
            }
        }
    }, [timerRef])

    return {
        time,
        startCount
    }
}

export default useCountdown
