import { useEffect, useRef, useState } from 'react';
import { randomSelectFromArray } from '../../utils/functions';
import { useInterval } from '../../utils/hooks';
import './styles.css'

const Scramble = () => {
    const wordsToScramble = ['Web Developer', 'Problem Solver Testing Testing', 'Efficiency Enthusiast', 'Data Driven']
    const charsForScramble = 'MHLUIKWjxqzcu!<>+_?@#$%&()'

    const [currentWord, setCurrentWord] = useState<string[]>(wordsToScramble[0].split(''))
    
    const initialScramble = Array(wordsToScramble[0].length).fill('_')
        // .map(() => randomSelectFromArray(charsForScramble.split('')))

    const [wordToRender, setWordToRender] = useState<string[]>(initialScramble)

    const indexesLeftToUpdate: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const populateIndexesArray = () => {
        wordToRender.forEach((_, i) => {
            indexesLeftToUpdate.push(i)
        })
    }

    const savedCallback: any = useRef()
    const savedScramble: any = useRef()
    const savedIndexes: any = useRef()

    const updateScrambleCallback = () => {        
        let updatedWord: string[] = [...savedScramble.current]
        let indexOptions: number[] = [...savedIndexes.current]
        
        let randomIndex: number = randomSelectFromArray(indexOptions)
        let randomChar: string = randomSelectFromArray(charsForScramble.split(''));
        updatedWord[randomIndex] = randomChar
        
        let anotherRandomIndex: number = randomSelectFromArray(indexOptions)
        updatedWord[anotherRandomIndex] = currentWord[anotherRandomIndex]
        
        indexOptions.splice(anotherRandomIndex, 1)
        savedIndexes.current = [...indexOptions]
        console.log(indexOptions)
        

        //Update State
        setWordToRender(updatedWord)
    }

    useEffect(() => {
        savedIndexes.current = [...indexesLeftToUpdate]
    }, [])

    useEffect(() => {
        savedCallback.current = updateScrambleCallback
        savedScramble.current = [...wordToRender]
    }, [wordToRender])

    useEffect(() => {
        function tick() {
            savedCallback.current()
        }
        let intervalId = setInterval(tick, 100)
        return () => clearInterval(intervalId)
    }, [])

    const className = 'Scramble';
    return (
        <div className={className}>
            <h1 className={`${className}_name`}>James</h1>
            <h1 className={`${className}_name`}>DeChavez</h1>
            <div className={`${className}_textContainer`}>
                {wordToRender.map((char, i) => {
                    return <span key={i}>{char}</span>
                })}
            </div>
        </div>
    );
};

export default Scramble;