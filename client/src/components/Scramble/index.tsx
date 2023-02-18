import { useEffect, useState } from 'react';
import './styles.css'

const Scramble = () => {
    const wordsToScramble = ['Web Developer', 'Problem Solver Testing Testing', 'Efficiency Enthusiast', 'Data Driven'];
    const charsForScramble = 'MHLUIKWjxqzcu!<>+_?@#$%&()';

    const [wordToRender, setWordToRender] = useState(wordsToScramble[0]);

    const className = 'Scramble';
    return (
        <div className={className}>
            <h1 className={`${className}_name`}>James</h1>
            <h1 className={`${className}_name`}>DeChavez</h1>
            <div className={`${className}_textContainer`}>
                {Array.from(wordToRender).map((char) => {
                    return <span>{char}</span>
                })}
            </div>
        </div>
    );
};

export default Scramble;