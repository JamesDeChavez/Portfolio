import { useEffect, useRef, useState } from 'react';
import { randomSelectFromArray } from '../../utils/functions';
import './styles.css'

const Scramble = () => {
    const wordsToScramble = ['Fullstack Developer', 'Problem Solver', 'Automation Addict', 'Data Driven']
    const charsForScramble = '!<>+_?@#$%&()'

    const [currentWord, setCurrentWord] = useState<string[]>([])    
    const [wordToRender, setWordToRender] = useState<string[]>(Array(wordsToScramble[0].length).fill('_'))
    const [indexesLeftToUpdate, setIndexesLeftToUpdate] = useState<number[]>([])
    
    const populateIndexesArray = () => {
        let updatedIndexesArray: number[] = []
        currentWord.forEach((_, i) => {
            updatedIndexesArray.push(i)
        })
        setIndexesLeftToUpdate(updatedIndexesArray)
    }

    const nextWord = () => {
        let currentIndex = wordsToScramble.indexOf(currentWord.toString().replaceAll(',', ''))
        let nextIndex = (currentIndex + 1) % wordsToScramble.length
        setCurrentWord(wordsToScramble[nextIndex].split(''))
    }

    const savedCallback: any = useRef()
    const savedScramble: any = useRef()
    const savedIndexes: any = useRef()
    let intervalId: NodeJS.Timer

    const updateScrambleCallback = (interval: NodeJS.Timer) => {
        //Pull Reference Variables        
        let updatedWord: string[] = [...savedScramble.current]
        let indexOptions: number[] = [...savedIndexes.current]

        //Check if you can exit interval
        if (indexOptions.length === 0) {
            setTimeout(() => {
                nextWord()
            }, 1000)
            clearInterval(interval)
        }

        //Randomly choose up to 3 indexes and change them to random chars
        let numOfLoops = randomSelectFromArray([1,2,3])
        for (let i = 0; i < numOfLoops; i++) {
            let randomIndex: number = randomSelectFromArray(indexOptions)
            let randomChar: string = randomSelectFromArray(charsForScramble.split(''));
            updatedWord[randomIndex] = randomChar
        }

        //Randomly choose 1 index and change it to the correct char
        let anotherRandomIndex: number = randomSelectFromArray(indexOptions)
        updatedWord[anotherRandomIndex] = currentWord[anotherRandomIndex]

        //Remove the correct index from the list of options
        indexOptions.splice(indexOptions.indexOf(anotherRandomIndex), 1)

        //Check if Array size needs DECREASE
        if (updatedWord.length > currentWord.length) {
            updatedWord.pop()
        }
        while (updatedWord.length > currentWord.length && indexOptions.length === 1) {
            updatedWord.pop()
        }        

        //Check if Array size needs to INCREASE
        if (updatedWord.length < currentWord.length) {
            let randomChar: string = randomSelectFromArray(charsForScramble.split(''));
            updatedWord.push(randomChar)
            indexOptions.push(updatedWord.length - 1)
            
        }
        
        //Update State
        setIndexesLeftToUpdate([...indexOptions])
        setWordToRender(updatedWord)
    }

    useEffect(() => {
        setTimeout(() => {
            setCurrentWord(wordsToScramble[0].split('')) 
        }, 1000) 
    }, [])
    
    useEffect(() => {
        savedCallback.current = updateScrambleCallback
    })

    useEffect(() => {
        savedScramble.current = [...wordToRender]
    }, [wordToRender])

    useEffect(() => {
        savedIndexes.current = [...indexesLeftToUpdate]
    }, [indexesLeftToUpdate])

    useEffect(() => {
        populateIndexesArray()
        function scramble() {
            savedCallback.current(intervalId)
        }
        intervalId = setInterval(scramble, 100)
        return () => clearInterval(intervalId)
    }, [currentWord])

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