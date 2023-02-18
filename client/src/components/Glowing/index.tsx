import './styles.css';

const Glowing = () => {
    const firstName = 'JAMES';
    const lastName = 'DECHAVEZ';
    const className = 'Glowing';
    return (
        <div className={className}>
            <div className={`${className}_nameContainer`}>
                {Array.from(firstName).map((char) => {
                    return (
                        <span className={`${className}_letter`}>{char}</span>
                    )
                })}
            </div>
            <div className={`${className}_nameContainer`}>
                {Array.from(lastName).map((char) => {
                    return (
                        <span className={`${className}_letter`}>{char}</span>
                    )
                })}
            </div>
        </div>
    );
};

export default Glowing;