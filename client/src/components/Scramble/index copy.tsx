import { useEffect, useState } from 'react';
import './styles.css'

const symbols: string[] = '!<>-_\\/[]{}—=+*^?#'.split('');
const randomItem = (array: Array<any>) => array[Math.floor(Math.random() * array.length)];
const nextItem = (array: Array<any>, currentItem: any) => {
    const currentIndex = array.indexOf(currentItem)
    const bound = array.length
    const nextIndex = (currentIndex + bound + 1) % bound
    return array[nextIndex]
};

const Scramble = () => {
    const texts = ['Web Developer', 'Problem Solver Testing Testing', 'Efficiency Enthusiast', 'Data Driven'];
    
    const [currentText, setCurrentText] = useState<string>(texts[0]);
    
    const initSymbols: string[] = Array(currentText.length).fill(0).map(() => randomItem(symbols));
    
    const [displayedText, setDisplayedText] = useState<string[]>(initSymbols);

    const leftIndexes: number[] = [];

    const defaultLeftIndexes = (): void => {
        currentText.split('').forEach((_, i) => {
        leftIndexes.push(i)
        });
    };

    let bakeLetterInterval: any = 0;
    let bakeTextInterval: any = 0;

    const bakeLetter = () => {
        bakeLetterInterval = setInterval(() => {      
            const updatedText: string[] = [];

            currentText.split('').forEach((_, i) => {
            if (!leftIndexes.includes(i)) {
                updatedText[i] = currentText[i];
                return;
            };
            const randomSymbol = randomItem(symbols);
            updatedText[i] = randomSymbol;
            });

            setDisplayedText(updatedText);
        
        }, 1000);
    };

    const bakeText = () => {
        defaultLeftIndexes();
        bakeLetter();
        bakeTextInterval = setInterval(() => {      
            if (leftIndexes.length === 0) {
            clearInterval(bakeLetterInterval);
            clearInterval(bakeTextInterval);
            setTimeout(() => {
                setCurrentText(nextItem(texts, currentText))
                defaultLeftIndexes()
            }, 1000)
            }

            leftIndexes.shift()
        
        }, 1000)
    }

    useEffect(() => {
        bakeText()
    }, [currentText]);

    const className = 'Scramble';

    return (
        <div className={className}>
            <h1 className={`${className}_name`}>James</h1>
            <h1 className={`${className}_name`}>DeChavez</h1>
            <div className={`${className}_textContainer`}>
                {Array.from(displayedText).map((char) => {
                    return <span>{char}</span>
                })}
            </div>
        </div>
    );
};

export default Scramble;