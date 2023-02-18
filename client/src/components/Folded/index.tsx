import './styles.css'

const Folded = () => {
    const firstName = 'JAMES';
    const lastName = 'DECHAVEZ';
    const className = 'Folded';
    return (
        <div className={className}>
            <div className={`${className}_nameContainer`}>
                {Array.from(firstName).map((char) => {
                    return (
                        <div className={`${className}_letterContainer`}>
                            <span className={`${className}_letter`} data-letter={char}>{char}</span>
                        </div>
                    )
                })}    
            </div>
            <div className={`${className}_nameContainer`}>
                {Array.from(lastName).map((char) => {
                    return (
                        <div className={`${className}_letterContainer`}>
                            <span className={`${className}_letter`} data-letter={char}>{char}</span>
                        </div>
                    )
                })}    
            </div>
        </div>
    );
};

export default Folded;