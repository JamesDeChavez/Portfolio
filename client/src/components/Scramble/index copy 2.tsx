import { useEffect, useRef, useState } from 'react';
import { randomSelectFromArray } from '../../utils/functions';
import { useInterval } from '../../utils/hooks';
import './styles.css'

const Scramble = () => {
    const wordsToScramble = ['Web Developer', 'Problem Solver Testing Testing', 'Efficiency Enthusiast', 'Data Driven']
    const charsForScramble = 'MHLUIKWjxqzcu!<>+_?@#$%&()'
    
    const [currentWord, setCurrentWord] = useState<string[]>(wordsToScramble[0].split(''))

    const initialScramble = Array(currentWord.length).fill('_')
    const [wordToRender, setWordToRender] = useState<string[]>(initialScramble)

    const indexesLeftToUpdate: number[] = []
    const populateIndexesArray = () => {
        currentWord.forEach((_, i) => {
            indexesLeftToUpdate.push(i)
        })
    }

    const scrambleWord = (currentDisplayedWord: string[]) => {
        let updatedWord = [...currentDisplayedWord]
        let randomNumOfLoops = randomSelectFromArray([1, 2, 3])

        //Update up to 3 random letters to random symbols
        for (let i = 0; i < randomNumOfLoops; i++) {
            let randomIndex: number = randomSelectFromArray(indexesLeftToUpdate.slice(0, wordToRender.length))
            let randomChar = randomSelectFromArray(charsForScramble.split(''));
            updatedWord[randomIndex] = randomChar
        }

        //Update 1 random letter to the correct letter
        let randomIndex: number = randomSelectFromArray(indexesLeftToUpdate.slice(0, wordToRender.length))
        updatedWord[randomIndex] = currentWord[randomIndex]
        indexesLeftToUpdate.splice(randomIndex, 1)

        return updatedWord
    }

    useEffect(() => {
        console.log('populated triggered')
        populateIndexesArray()
    }, [])

    useInterval(() => {
        console.log('scramble triggered')
        console.log('wordtorender', wordToRender.toString())
        let updatedWord = scrambleWord([...wordToRender])
        setWordToRender(updatedWord)
    }, 1000)

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